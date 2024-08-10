import React from "react";
import { Table } from "antd";
import { Button } from 'antd';
import { Link, useLoaderData } from "react-router-dom";
import { deleteCategory } from "../../utils/categoriesUtil";

const AllCategories = () => {
    const { categories } = useLoaderData();
    const handleDeleteCategory = (categoryid) => {
      deleteCategory(categoryid);
      window.location.reload();
    }

    const dataSource = categories.map((category) => ({
        key: category.categoryname,
        userId: category.userid,
        categoryName: category.categoryname,
        description: category.description,
        updateAnddelete: <>
          <Button type="primary"><Link to={`/admin/updateCategory/${category.id}`}>Sửa</Link></Button>
          <Button style={{marginLeft: '10px'}} type="primary" danger onClick={()=>handleDeleteCategory(category.id)}>Xóa</Button>
        </>
    }));

  const columns = [
    {
      title: "Id người thêm",
      dataIndex: "UerId",
      key: "UerId",
    },
    {
      title: "Tên danh mục",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Giới thiệu",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Sửa, xóa",
      dataIndex: "updateAnddelete",
      key: "updateAnddelete",
    },
  ];
  return (
  <div style={{padding: "20px"}}>
    <Table dataSource={dataSource} columns={columns} pagination={false} />
  </div>
  );
};

export default AllCategories;
