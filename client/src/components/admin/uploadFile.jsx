import React, { useState } from "react";
import { Button, Form, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { graphQLRequest } from "../../utils/request";

const UploadFile = () => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [fileUpload, setFileUpload] = useState([]);

  const handleUpload = ({fileList}) => {
    setFileUpload(fileList);
  };

  const handleSubmit = async () => {
    if (!fileUpload) {
      console.log("Chưa chọn ảnh sản phẩm!");
      return;
    }
    console.log(fileUpload);
    const query = `mutation UploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }`;

    const File = fileUpload[0].originFileObj

    const data = await graphQLRequest({
      query,
      variables: {
        file: File.name
      },
    });

    return data;
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        width: "100%",
        margin: "20px 150px",
      }}
      initialValues={{
        remember: true,
      }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Upload beforeUpload={() => false} onChange={handleUpload}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UploadFile;
