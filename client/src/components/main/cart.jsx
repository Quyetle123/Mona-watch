/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "../../CSS/cart.css";
import { Button, Checkbox, InputNumber, Table } from "antd";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { deleteCart, updateCart } from "../../utils/cartUtil";
import { addOrder } from "../../utils/orderUtil";
import { NumericFormat } from "react-number-format";

const Cart = () => {
  const userid = localStorage.getItem("id")
  const navigate = useNavigate()
  const { carts } = useLoaderData();
  const id = localStorage.getItem('id')
  const address = localStorage.getItem('address')
  const city = localStorage.getItem('city')
  const Price = ({ value }) => (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={0}
    />
  );

  const handleDelete = (id) => {
    deleteCart(id);
    window.location.reload();
  };


  const handleQuantityChanger = (updateCartId, quantity) => {
    updateCart(updateCartId, quantity);
    window.location.reload()
  };
  function sumArray(arr) {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  const [totalSave, setTotalSave] = useState([]);
  const [productNameArr, setProductNameArr] = useState([])
  const [quantityArr, setQuantityArr] = useState([])
  const handleChecked = (e, total , productname, quantity) => {
    if (e.target.checked) {
      setTotalSave((prevTotalSave) => [...prevTotalSave, total]);
      setProductNameArr((prev) => [...prev, productname])
      setQuantityArr((prev) => [...prev, quantity])
    } else {
      setTotalSave((prevTotalSave) => prevTotalSave.filter(item => item !== total));
      setProductNameArr((prev) => prev.filter(item => item !== productname));
      setQuantityArr((prev) => prev.filter(item => item !== quantity))
    }
  };

  useEffect(() => {
    console.log(totalSave);
    console.log(productNameArr)
    console.log(quantityArr)
  }, [totalSave, productNameArr, quantityArr]);


  const handlePay = () => {
    addOrder(id, sumArray(totalSave), address, city, productNameArr, quantityArr, 'Đang đóng gói')
    navigate(`/order/${userid}`)
  }

  const dataSource = carts.map((cart, index) => ({
    key: cart.id,
    checkbox: (
      <Checkbox onClick={(e) => handleChecked(e, cart.price * cart.quantity, cart.productname, cart.quantity)} />
    ),
    productName: cart.productname,
    image: <img src={`${cart.image}`} style={{ width: "50px" }} />,
    price: <p><Price value={cart.price} /> đ</p>,
    quantity: (
      <InputNumber
        onChange={(value) => handleQuantityChanger(cart.id, value)}
        min={1}
        max={100}
        defaultValue={cart.quantity}
      />
    ),
    total: <p><Price value={cart.price * cart.quantity} /> đ</p>,
    delete: (
      <div>
        <IoClose
          onClick={() => handleDelete(cart.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    ),
  }));

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
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
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Tổng",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "",
      dataIndex: "delete",
      key: "delete",
      align: "right",
    },
  ];

  const payDataSource = [
    {
      key: "1",
      title: "Tổng phụ",
      value: <p><Price value={sumArray(totalSave)} /> đ</p>,
    },
    {
      key: "2",
      title: "Giao hàng",
      value: (
        <>
          <p>Giao hàng miễn phí</p>
          <p>{address}</p>
          <p>Tỉnh/ thành phố: {city}</p>
        </>
      ),
    },
    {
      key: "3",
      title: "Tổng",
      value: <p><Price value={sumArray(totalSave)} /> đ</p>,
    },
  ];

  const payColumns = [
    {
      title: "Tổng số lượng",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "",
      dataIndex: "value",
      key: "value",
      align: "right",
    },
  ];
  return (
    <main className="cart">
      <article className="cart-article">
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </article>
      <aside className="cart-aside">
        <Table
          columns={payColumns}
          dataSource={payDataSource}
          pagination={false}
        />
        <Button onClick={handlePay} type="default" style={{ width: "100%", marginTop: "15px" }}>
          Thanh toán
        </Button>
      </aside>
    </main>
  );
};

export default Cart;
