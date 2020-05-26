import React from "react";

import { Upload as AntUpload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


const Upload = () => {
  const { Dragger } = AntUpload;

  const draggerProps = {
    name: 'csvfile',
    multiple: false,
    action: 'http://127.0.0.1:4000/upload',
    onChange (info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload: (file) => {
      if (file.size > 20*1024*1024) {
        message.error(`${file.name} file upload failed. File size should be less than 20MB`);
        return false;
      }
      if (file.type !== "text/csv") {
        message.error(`${file.name} file upload failed. Only CSV files are allowed`);
        return false;
      }
      return true;
    },
  }

  return (
    <Dragger {...draggerProps}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Only CSV files are supported</p>
    </Dragger >
  );
}

export default Upload;