import React, { useMemo } from "react";
import { Button, Form, Input, Select } from "antd";
import { addProduct } from "../../utils/productesUtil";
import { useLoaderData, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { categories } = useLoaderData();
  const navigate = useNavigate()

  const handleSubmit = (value) => {
    addProduct(
      value.categoryid,
      value.productName,
      value.description,
      Number(value.price),
      value.image,
      Number(value.quantity),
      0
    );
    navigate('/admin/allProducts')
  };
  const options = useMemo(
    () =>
      categories.map((category) => ({
        value: category.id,
        label: category.categoryname,
      })),
    [categories]
  );
  return (
    <div style={{ width: "100%" }}>
      <Form
        onFinish={(value) => handleSubmit(value)}
        layout="vertical"
        name="basic"
        labelCol={{
          span: 40,
        }}
        wrapperCol={{
          span: 260,
        }}
        style={{
          margin: "20px 150px",
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Tên sản phẩm"
          name="productName"
          rules={[
            {
              required: true,
              message: "Chưa điền tên sản phẩm!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giới thiệu"
          name="description"
          rules={[
            {
              required: true,
              message: "Chưa điền giới thiệu!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[
            {
              required: true,
              message: "Chưa điền giá!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="categoryid"
          rules={[
            {
              required: true,
              message: "Chưa chọn danh mục!",
            },
          ]}
        >
          <Select
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={options}
          />
        </Form.Item>

        <Form.Item
          label="Link ảnh"
          name="image"
          rules={[
            {
              required: true,
              message: "Chưa điền giá!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Chưa điền số lượng!",
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

export default AddProduct;
