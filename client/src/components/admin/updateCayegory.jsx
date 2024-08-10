import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { updateCategory } from "../../utils/categoriesUtil";

const UpdateCategory = () => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { categoryid } = useParams();
  const navigate = useNavigate();

  const { category } = useLoaderData();
  const [formUpdate] = Form.useForm();
  useEffect(() => {
    formUpdate.setFieldsValue({
      addCategory: category.categoryname,
      description: category.description,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [categoryName, setCategoryName] = useState();
  const [description, setDescription] = useState();
  const handleCategoryNameChanger = (e) => {
    setCategoryName(e.target.value);
  };
  const handleDescriptionChanger = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = async () => {
    updateCategory(categoryid, categoryName, description);
    navigate("/admin/allCategories");
  };
  return (
    <div style={{ width: "85%", }}>
      <Form
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
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên danh mục"
          name="addCategory"
          rules={[
            {
              required: true,
              message: "Chưa điền tên danh mục!",
            },
          ]}
          onChange={handleCategoryNameChanger}
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
          onChange={handleDescriptionChanger}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateCategory;
