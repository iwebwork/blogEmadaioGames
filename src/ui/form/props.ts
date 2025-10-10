import { Form } from 'antd';
import type { ColProps, FormInstance } from 'antd';
import { FormLabelAlign, Store } from 'antd/es/form/interface';
import { CSSProperties, ReactElement } from 'react';


type LayoutType = Parameters<typeof Form>[0]['layout'];

export interface ILayoutForm {
    form: FormInstance,
    name: string;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    style?: CSSProperties | undefined;  
    initialValues?: Store;
    autoComplete?: string | undefined;
    labelAlign?: FormLabelAlign | undefined;
    children: ReactElement[] | any;
    formLayout?: LayoutType;

    onFinish?: (values: any) => void;
    onFinishFailed?: (errorInfo: any) => void;
}
