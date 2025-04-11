import { Button, DatePicker, Flex, Form, FormProps, Input, Select, Space, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import React from "react";
import { getDataAtual } from '../../hooks/comuns';
import UploadImage from '../../ui/layout/uploadImage';
import { FieldType } from './props';

const { Title } = Typography;

const CadastroPostView: React.FC = () => {

  const [form] = Form.useForm<FieldType>();
  const values = Form.useWatch('cadastroPost', form);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
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
            tipo: "1",
            liberado: "2"
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
              options={[
                { value: '1', label: 'Noticias' },
                { value: '2', label: 'Review' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Liberado"
            name="liberado"
            rules={[{ required: true, message: "Campo obrigatório e sem espaços!" }]}
          >
            <Select
              options={[
                { value: '1', label: 'Sim' },
                { value: '2', label: 'Não' },
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