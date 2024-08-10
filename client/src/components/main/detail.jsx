/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../CSS/detail.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addCart } from "../../utils/cartUtil";
import { NumericFormat } from "react-number-format";

const Detail = () => {
  const { product } = useLoaderData();
  const navigate = useNavigate();
  const userid = localStorage.getItem("id");
  const Price = ({ value }) => (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={0}
    />
  );

  const addToCart = () => {
    addCart(
      userid,
      product.id,
      product.productname,
      product.image,
      Number(product.price),
      1
    );
    navigate(`/cart/${userid}`);
  };
  return (
    <main className="detail">
      <aside className="detail-aside">
        <img src={`${product.image}`} />
      </aside>
      <article className="detail-article">
        <h1>{product.productname}</h1>
        <h2>
          <Price value={product.price} /> đ
        </h2>
        <p>{product.description}</p>
        <p>Có thanh toán: <b>Trả góp</b> khi mua Online (Qua thẻ tín dụng)</p>
        <p>Gọi đặt mua: <b>1900.6777 (8:00-1:30)</b></p>
        <button style={{ display: (product.quantity === 0) ? "none" : "block" }} id="addCart-btn" onClick={addToCart}>Thêm vào giỏ hàng</button>
        <button style={{ display: (product.quantity === 0) ? "block" : "none", cursor: "text" }} id="addCart-btn">Hết hàng</button>
        <button>Thêm vào yêu thích</button>
      </article>
    </main>
  );
};

export default Detail;
