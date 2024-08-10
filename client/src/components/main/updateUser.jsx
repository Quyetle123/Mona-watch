import { Button, Input, Form } from "antd";
import React, { useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../utils/userUtil";

const UpdateUser = () => {
    const navigate = useNavigate()
    const {user} = useLoaderData()
    const { userid } = useParams()
    const [formUpdate] = Form.useForm();
    useEffect(() => {
        formUpdate.setFieldsValue({
          username: user.username,
          email: user.email,
          address: user.address,
          city: user.city
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    const handleSubmit = (value) => {
        updateUser(userid, value.username, value.email, 'User', value.address, value.city)
        localStorage.setItem("displayName", value.username);
        localStorage.setItem("email", value.email);
        localStorage.setItem("address", value.address);
        localStorage.setItem("city", value.city);
        navigate('/')
    }
  return (
    <div style={{ margin: "100px 0 200px 0" }}>
      <Form
        onFinish={(value) => handleSubmit(value)}
        form={formUpdate}
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
        autoComplete="off"
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[
            {
              required: true,
              message: "Chưa điền tên đăng nhập!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Chưa điền email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[
            {
              required: true,
              message: "Chưa điền địa chỉ!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tỉnh thành"
          name="city"
          rules={[
            {
              required: true,
              message: "Chưa điền tỉnh thành",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateUser;
