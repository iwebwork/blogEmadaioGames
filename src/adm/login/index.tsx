import { Button, Col, Form, Input, Row, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react';
import { ILoginRequestViewModel } from '../../contexts/auth/props';
import { useAuth } from '../../contexts/auth/auth';
import { useMessage } from '../../contexts/messages/messages';
import { useNavigate } from 'react-router';
import FormUi from '../../ui/form';
import InputUi from '../../ui/input';

const FormComponent = () => {
  const [form] = Form.useForm<ILoginRequestViewModel>();
  const context = useAuth();
  const navigate = useNavigate();

  const onFinish = async () => {
    const values = form.getFieldsValue();
    await context.login(values);

    context.isLogado && navigate('/site');
  }

  React.useEffect(() => {
    const request: ILoginRequestViewModel = {
      "Email": "teste@gmail.com",
      "Password": "@Teste123"
    }

    form.setFieldsValue(request)
  }, []);

  return (<>
    <FormUi form={form}
      name={'Login'}
      autoComplete='off'
      labelAlign='right'
      onFinish={onFinish}
    >
      <Space />

      <InputUi
        label='Email'
        name='Email'
        rules={[{ required: true, message: 'O Email é obrigatório!' }]}
      />

      <Form.Item
        label='Senha'
        name='Password'
        rules={[{ required: true, message: 'A senha é obrigatória!' }]}
      >
        <Input.Password
          placeholder='Senha'
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>

      <Form.Item style={{ 'justifyItems': 'end' }}>
        <Button type='primary' htmlType='submit'>
          Login
        </Button>
      </Form.Item>
    </FormUi>
  </>
  )
}

const LoginView: React.FC = () => {
  return (
    <Row style={{ 'width': '100%', 'justifyContent': 'center', 'alignItems': 'center' }}>
      <Col span={5}></Col>
      <Col>
        <FormComponent />
      </Col>
      <Col span={5}></Col>
    </Row>
  )
}

export default LoginView;
