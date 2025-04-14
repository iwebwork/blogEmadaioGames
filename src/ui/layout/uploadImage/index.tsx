import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, UploadFile, UploadProps } from "antd";
import { UploadRequestOption } from 'rc-upload/lib/interface';
import React, { useState } from "react";
import { FileType, getBase64, IOptionsFile } from "./props";

interface IUploadImage {
  name: string;
  maxCount: number;
}

const UploadImage: React.FC<IUploadImage> = ({ name, maxCount }) => {
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [finishedUpload, setFinishedUpload] = useState(false);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFinishedUpload(false);
    setFileList(newFileList);
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const customRequest = async (options: UploadRequestOption) => {
    if (!options.file)
      return;

    setTimeout(() => {
      setFileList(fileList.map((res) => {
        const file = options.file as IOptionsFile;

        if (res.uid === file.uid) {
          return {
            ...res,
            status: 'done'
          };
        }
        else {
          return {
            ...res,
          };
        }
      }))
    }, 1000);

    setFinishedUpload(true);
  }

  React.useEffect(() => {
    if (!finishedUpload)
      return;

    fileList.map((res) => {
      if (!res.thumbUrl)
        return;
      console.log('res', res);

      // console.log('res.thumbUrl', res.thumbUrl)
    });

  }, [finishedUpload, fileList]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  return (
    <>
      <Upload
        name={name}
        listType="picture-circle"
        accept='image/png'
        fileList={fileList}
        onChange={handleChange}
        action={undefined}
        maxCount={maxCount}
        customRequest={customRequest}
        onPreview={handlePreview}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  )
}

export default UploadImage;