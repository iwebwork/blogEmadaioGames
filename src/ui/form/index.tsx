import React from 'react';
import { Form } from 'antd';
import { ILayoutForm } from './props';

const FormUi: React.FC<ILayoutForm> = ({
  form,
  name,
  labelCol,
  wrapperCol,
  style,
  initialValues,
  autoComplete = 'off',
  children,
  labelAlign = 'left',
  formLayout = 'vertical',
  onFinish,
  onFinishFailed,
}) => {
  return (
    <Form
      form={form}
      name={name}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      style={style}
      initialValues={initialValues}
      autoComplete={autoComplete}
      labelAlign={labelAlign}
      layout={formLayout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size='large'
    >
      {children}
    </Form>
  )

}

export default FormUi;