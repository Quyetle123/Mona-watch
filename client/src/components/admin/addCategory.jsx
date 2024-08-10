import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../utils/categoriesUtil";

const AddCategory = () => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate()
  const id = localStorage.getItem("id");
  const [categoryName, setCategoryName] = useState();
  const [description, setDescription] = useState();

  const handleCategoryNameChanger = (e) => {
    setCategoryName(e.target.value);
  };

  const handleDescriptionChanger = (e) => {
    setDescription(e.target.value);
  };

  const handleAddCategory = async () => { 
    addCategory(id, categoryName, description);
    navigate("/admin/allCategories")
  };
  return (
    <div style={{width: "100%"}}>
      <Form
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
          <Button type="primary" htmlType="submit" onClick={handleAddCategory}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddCategory;
