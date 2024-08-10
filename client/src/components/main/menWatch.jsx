import React, { useState } from "react";
import "../../CSS/menWatch.css";
import { Pagination, Radio } from "antd";
import { Link, useLoaderData } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const MentWatch = () => {
  const product = useLoaderData();
  const [rederProduct, setRenderProduct] = useState(product.ProductWithcateId);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = rederProduct.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const Price = ({ value }) => (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={0}
    />
  );

  const handleCheck = (e) => {
    if(e.target.value === 1){
      setRenderProduct(product.ProductWithcateId);
    }else if(e.target.value === 2) {
      setRenderProduct(product.ProductWithcateIdPriceDesc)
    }else if(e.target.value === 3) {
      setRenderProduct(product.ProductWithcateIdPriceAsc)
    }else if(e.target.value === 4) {
      setRenderProduct(product.SellingProductWithcateId)
    }
  };

  return (
    <main className="watchList">
      <aside className="watchList-aside">
        <div className="search">
          <h3>TÌM KIẾM THEO THỐNG KÊ</h3>
          <Radio.Group defaultValue={1} onChange={handleCheck} style={{ display: "flex", flexDirection: "column" }}>
            <Radio value={1}>Mặc định</Radio>
            <Radio value={2}>Xếp theo giá: Cao đến thấp</Radio>
            <Radio value={3}>Xếp theo giá: Thấp đến cao</Radio>
            <Radio value={4}>Sản phẩm bán chạy</Radio>
            <Radio value={5}>Sản phẩm được đánh giá tốt</Radio>
            <Radio value={6}>Mức độ phổ biến</Radio>
            <Radio value={7}>Sản phẩm khuyến mãi</Radio>
          </Radio.Group>
        </div>
      </aside>
      <article className="watchList-article">
        {paginatedProducts.map((item) => (
          <div className="sanpham flast__product-mw" key={item.id}>
            <div className="flast__product-top-mw">
              <div className="flast__product-top-box-mw">
                <Link to={`/detail/${item.id}`}>
                  <img
                    className="flast__product-img-mw"
                    src={item.image}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="flast__product-bottom-mw">
              <div className="flast__product-name-mw">{item.productname}</div>
              <div className="flast__product-price-mw">
                <Price value={item.price} /> đ
              </div>
              <button className="flast__product-btn-mw">
                <a href="/">Thêm yêu thích</a>
              </button>
            </div>
          </div>
        ))}
        <div className="flast__product-page-mw">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={rederProduct.length}
            onChange={handlePageChange}
          />
        </div>
      </article>
    </main>
  );
};

export default MentWatch;
