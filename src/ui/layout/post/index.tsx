import { Col, Image, Row, Typography } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router";
import hookApi from "../../../hooks/api";
import { IPostComponent, ITitlePost, TGerarPost } from "./props";

const { Title, Paragraph, Text } = Typography;

const TitlePost: React.FC<ITitlePost> = ({ text, level }) => {
  return (
    <Title level={level}>{text}</Title>
  )
}

const PostUi: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [rowsPost, setRowsPost] = useState<TGerarPost>();
  const [title, setTile] = useState<string>();
  const { post } = hookApi();

  const SelectPost = async () => {
    const result: IPostComponent = (await post({ url: `/api/posts/select/${id}`, body: {} })).data;

    if (!result)
      return;

    if (result.corpo)
      setRowsPost(JSON.parse(result.corpo));

    setTile(result.title)
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
    }, []);

    React.useEffect(() => {
      if (!post)
        return;

      setIsRender(true);
    }, [post]);

    React.useEffect(() => {
      if (!isRender)
        return;

      const elements: React.ReactNode[] = [];

      if (post) {
        post.map((value, index) => {
          value.Row.map((item, itemIndex) => {
            if (item.Image) {
              const image = item.Image;
              elements.push(<Row key={Math.random().toString()}>
                <Col span={20}>
                  <Image src={process.env.REACT_APP_URL_API + image.href} />
                </Col>
              </Row>);
            }

            if (item.Paragraph) {
              const paragraph = item.Paragraph;

              elements.push(<Row key={Math.random().toString()}>
                <Paragraph strong={paragraph.strong}>
                  {paragraph.Title &&
                    <Title level={paragraph.Title.Level}>
                      {paragraph.Title.Text}
                    </Title>}
                  <Text>
                    {paragraph.Text}
                  </Text>
                </Paragraph>
              </Row>);
            }
          })
        });
      }

      if (elements.length === 0) {
        elements.push(<Paragraph>
          Post não encontrado
        </Paragraph>)
      }

      setRows(elements);
    }, [isRender])

    return (
      <>
        {isRender &&
          rows
        }
      </>
    )
  }

  return (
    <>
      <TitlePost key={Math.random().toString()} level={1} text={`${title}`} />
      <Component />
    </>
  )
}

export default PostUi;