import { Form, Input } from "antd";

interface Fields {
  label: string;
  name: string;
  rules: any[];
  hidden?: boolean;
  readOnly?: boolean;
  onChange?: (value: any) => void;
}

const InputUi: React.FC<Fields> = ({
  label,
  name,
  rules,
  hidden,
  readOnly,
  onChange
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      hidden={name === 'id' || hidden}
    >
      <Input onChange={onChange} readOnly={readOnly || false} />
    </Form.Item>
  )
};

export default InputUi; 