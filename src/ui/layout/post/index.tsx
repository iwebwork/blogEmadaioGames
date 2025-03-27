import React, { ReactNode, useState } from "react";
import { useParams } from "react-router";
import { post } from "../../../hooks/api";
import Pallet from "../colorsPalette";
import { Typography, Image } from "antd";

interface IDynamicComponentProps {
  text: string;
}

const DynamicComponent: React.FC<IDynamicComponentProps> = ({ text }) => {
  const { Paragraph, Title, Text } = Typography;


  return <>{text}</>;
};

const CreateDynamicComponent = (component: React.ComponentType<any>, props: any) => {
  return (
    React.createElement(component, props)
  );
};

const PostUi: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [corpoPost, setCorpoPost] = useState<string>();

  const SelectPost = async () => {
    console.log('vai selecionar o post');
    const result = (await post({ url: `/api/posts/select/${id}`, body: {} })).data;

    if (!result)
      return;

    setCorpoPost(result.corpo);
  }

  React.useEffect(() => {
    SelectPost();
  }, []);

  const dynamicComponent = CreateDynamicComponent(DynamicComponent, { text: corpoPost });

  return (
    <div style={{
      backgroundColor: Pallet.BackGround.secundaria,
      marginBottom: 50,
      marginRight: 20
    }}>
      {dynamicComponent}
    </div>
  )
}

export default PostUi;