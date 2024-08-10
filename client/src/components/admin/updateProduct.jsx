import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../../utils/productesUtil";

const UpdateProduct = () => {

  const {productid} = useParams()
  const navigate = useNavigate()

  const { product } = useLoaderData();
  const [formUpdate] = Form.useForm();
  useEffect(() => {
    formUpdate.setFieldsValue({
      productName: product.productname,
      description: product.description,
      price: product.price,
      categoryid: product.categoryid,
      image: product.image,
      quantity: product.quantity
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (value) => {
    updateProduct(productid, value.categoryid, value.productName, value.description, Number(value.price), value.image, Number(value.quantity))
    navigate('/admin/allProducts')
  }

  return (
    <div style={{ width: "85%" }}>
      <Form
        onFinish={(value) => handleSubmit(value)}
        form={formUpdate}
        layout="vertical"
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 21,
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
            options={[
              { value: "669f4473e55fab41309a533f", label: "ĐỒNG HỒ NAM" },
              { value: "669f4481e55fab41309a5344", label: "ĐỒNG HỒ NỮ" },
            ]}
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

export default UpdateProduct;
