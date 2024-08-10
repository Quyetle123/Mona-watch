/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Table } from "antd";
import { Button } from "antd";
import { Link, useLoaderData } from "react-router-dom";
import { deleteProduct } from "../../utils/productesUtil";
import { NumericFormat } from "react-number-format";

const Allproducts = () => {
  const { products } = useLoaderData();

  const Price = ({ value }) => (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      prefix="₫"
      decimalScale={0}
    />
  );
  const handleDeleteProduct = (productid) => {
    deleteProduct(productid)
    window.location.reload();
  };

  const dataSource = products.map((product) => ({
    key: product.id,
    productId: product.id,
    productName: product.productname,
    image: (
        <img src={product.image} style={{width: "50px"}} />
    ),
    price: <Price value={product.price} />,
    description: product.description,
    quantity: product.quantity,
    sold: product.sold,
    updateAnddelete: (
      <div style={{display: "flex"}}>
        <Button type="primary">
          <Link to={`/admin/updateProduct/${product.id}`}>Sửa</Link>
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          type="primary"
          danger
          onClick={() => handleDeleteProduct(product.id)}
        >
          Xóa
        </Button>
      </div>
    ),
  }));

  const columns = [
    {
      title: "Id sản phẩm",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Giới thiệu",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Đã bán",
      dataIndex: "sold",
      key: "sold",
    },
    {
      title: "Sửa, xóa",
      dataIndex: "updateAnddelete",
      key: "updateAnddelete",
    },
  ];
  return (
    <div style={{padding:"20px"}}>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  )
};

export default Allproducts;
