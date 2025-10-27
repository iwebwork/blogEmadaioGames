import { Button, DatePicker, Flex, Form, FormProps, Input, Select, SelectProps, Space, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs, { OptionType } from 'dayjs';
import React, { useState } from "react";
import { getDataAtual } from '../../hooks/comuns';
import UploadImage from '../../ui/uploadImage';
import { FieldType } from './props';
import hooksApi from '../../hooks/api';
import MessageComponent from '../../ui/message';
import { useMessage } from '../../contexts/messages/messages';

const { Title } = Typography;

const CadastroPostView: React.FC = () => {
  const { post } = hooksApi();
  const messageContext = useMessage();

  const [form] = Form.useForm<FieldType>();
  const values = Form.useWatch('cadastroPost', form);
  const [optionsTiposPost, setOptionsTiposPost] = useState<SelectProps[]>([])

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    messageContext.clearMessages();
    const date = new Date(values.date);

    const response = (await post({
      url: `api/posts/insert`, body: {
        name: values.name,
        title: values.title,
        date: date,
        image: values.image,
        tipoPostId: values.tipo,
        corpo: values.corpo,
        liberado: values.liberado || 1,
      }
    }));

    messageContext.setMessages(response.notifications)
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    messageContext.clearMessages();
    messageContext.setMessages([{
      message: "Erro ao cadastrar post",
      tipo: 2,
      tipoNome: "Erro"
    }]);
  };

  const loadTiposPost = async () => {
    const response = await post({ url: `api/tipoPost/getSelect`, body: {} })
    if (response.isValid) {
      setOptionsTiposPost(response.data)
    }
  }

  React.useEffect(() => {
    loadTiposPost();
  }, [])

  return (
    <>
      <MessageComponent />
      <Flex justify="center">
        <Title>
          Cadastro de post
        </Title>
      </Flex>

      <Flex
        vertical
        style={{
          marginBottom: 10,
          marginRight: 10
        }}>
        <Form
          form={form}
          name="cadastroPost"
          initialValues={{
            name: "Nome teste",
            title: "Titulo Teste",
            date: dayjs(getDataAtual(), "DD/MM/YYYY"),
            image: "",
            corpo: "Corpo Teste teste",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item<FieldType>
            label="Nome do Post"
            name="name"
            rules={[{ required: true, message: 'Campo obrigatório e sem espaços!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Titulo"
            name="title"
            rules={[{ required: true, message: "Campo obrigatório e sem espaços!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Data"
            name="date"
            rules={[{ required: true, message: "Campo obrigatório e sem espaços!" }]}
          >
            <DatePicker format={'DD/MM/YYYY'} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Icon"
            name="image"
          >
            <UploadImage name='image' maxCount={1} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Tipo"
            name="tipo"
            rules={[{ required: true, message: "Campo obrigatório e sem espaços!" }]}
          >
            <Select
              options={optionsTiposPost}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Liberado"
            name="liberado"
            rules={[{ required: true, message: "Campo obrigatório e sem espaços!" }]}
          >
            <Select
              options={[
                { value: 1, label: 'Sim' },
                { value: 2, label: 'Não' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Corpo"
            name="corpo"
            rules={[{ required: true, message: "Campo obrigatório e sem espaços!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label={null}>
            <Space>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
              <Button type="default" htmlType="reset">
                Cancelar
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Flex>
    </>
  )
}

export default CadastroPostView;