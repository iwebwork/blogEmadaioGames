import { Col, Flex, Image, Row, Spin, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import hookApi from "../../../hooks/api";
import { IPostComponent, ITitlePost, TGerarPost } from "./props";
import NaoEncontradoUi from "../naoEncontradoUi";

const { Title, Paragraph, Text } = Typography;

const TitlePost: React.FC<ITitlePost> = ({ text, level }) => {
  return (
    <Flex justify="center">
      <Title level={level}>{text}</Title>
    </Flex>
  )
}

const PostUi: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [rowsPost, setRowsPost] = useState<TGerarPost>();
  const [title, setTile] = useState<string>();

  const { post } = hookApi();
  const navigation = useNavigate();

  const SelectPost = async () => {
    try {
      const result = (await post({ url: `/api/posts/select/${id}`, body: {} }));

      if (!result.isValid) {
        return;
      }

      const data: IPostComponent = result.data;

      if (data.corpo)
        setRowsPost(JSON.parse(data.corpo));

      setTile(data.title)
    } catch (error) {
      navigation('/site/erro');
    }
  }

  React.useEffect(() => {
    SelectPost();
  }, []);

  const Component = () => {
    const [post, setPost] = useState<TGerarPost>();
    const [rows, setRows] = useState<React.ReactNode[]>();
    const [isRender, setIsRender] = useState<boolean>(false);

    React.useEffect(() => {
      if (!rowsPost)
        return;

      setPost(rowsPost);
      setTimeout(() => {

        setIsRender(true);
      }, 2000);
    }, [rowsPost]);

    React.useEffect(() => {
      if (!isRender)
        return;

      const elements: React.ReactNode[] = [];

      if (post) {
        elements.push(
          <TitlePost key={Math.random().toString()} level={1} text={`${title}`} />
        )

        post.map((value, index) => {
          value.Row.map((item, itemIndex) => {
            item.Image &&
              elements.push(<Row key={Math.random().toString()}>
                <Col span={20}>
                  <Image src={item.Image.href} />
                </Col>
              </Row>);

            item.Paragraph &&
              elements.push(<Row key={Math.random().toString()}>
                <Paragraph strong={item.Paragraph.strong}>
                  {item.Paragraph.Title &&
                    <Title level={item.Paragraph.Title.Level}>
                      {item.Paragraph.Title.Text}
                    </Title>}

                  {item.Paragraph.Text &&
                    <Text>
                      {item.Paragraph.Text}
                    </Text>}
                </Paragraph>
              </Row>);
          })
        });
      }

      if (elements.length === 0) {
        elements.push(<NaoEncontradoUi />)
      }

      setRows(elements);
    }, [isRender])

    return (
      <div
        style={{
          paddingRight: 10
        }}
      >
        {isRender ? rows : <Spin fullscreen />}
      </div>
    )
  }

  return (
    <>
      <Component />
    </>
  )
}

export default PostUi;