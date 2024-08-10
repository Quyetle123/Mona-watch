import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { NumericFormat } from 'react-number-format';

const Home = () => {
  const { sellingProduct } = useLoaderData();
  const { newProduct } = useLoaderData();

  const userId = null;
  const Price = ({ value }) => (
    <NumericFormat
      value={value}
      displayType={'text'}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={0}
    />
  );

  return (
    <main>
      <section className="slideshow">
        <div className="slideshow-box">
          <div className="slideshow-img">
            <img
              src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg"
              alt=""
            />
          </div>
          <div className="slideshow-img">
            <img
              src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg"
              alt=""
            />
          </div>
          <div className="slideshow-img">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-atmospheric-black-watch-promotion-banner-image_179454.jpg"
              alt=""
            />
          </div>
          <div className="slideshow-img">
            <img
              src="https://shop28decor.com/ct/uploads/2023/04/Chup-anh-dong-ho-cho-nguoi-moi-bat-dau.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="slideshow__title">
          <h2>Mona watch</h2>
          <h1>ĐỒNG HỒ HẢI TRIỀU</h1>
          <p>
            Cùng với sự ra đời và phát triển không ngừng của thời trang thế
            giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính
            hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ...
          </p>
          <button className="slide__btn">XEM SẢN PHẨM</button>
        </div>
        <div className="slideshow-btn">
          <div className="slideshow-btn-left">
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="slideshow-btn-right">
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      </section>
      <section className="trend">
        <div className="men-trend">
          <div className="trend__img">
            <img
              src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-1.jpg"
              alt=""
            />
          </div>
          <div className="trend-title">
            <h3>Xu hướng 2024</h3>
            <div className="trend-border"></div>
            <h1>ĐỒNG HỒ NAM</h1>
          </div>
        </div>
        <div className="women-trend">
          <div className="trend__img">
            <img
              src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
              alt=""
            />
          </div>
          <div className="trend-title">
            <h3>Xu hướng 2024</h3>
            <div className="trend-border"></div>
            <h1>ĐỒNG HỒ NỮ</h1>
          </div>
        </div>
      </section>
      <section className="product__header">
        <h2>Sản phẩm bán chạy</h2>
        <div className="product__header-btn">
          <i className="bx bx-chevron-left"></i>
          <i className="bx bx-chevron-right"></i>
        </div>
      </section>
      <section className="product__flast">
        {sellingProduct.map((item) => (
          <div className="sanpham flast__product" key={item.id}>
            <div className="flast__product-top">
              <div className="flast__product-top-box">
                <Link to={`/detail/${item.id}`}>
                  <img
                    className="flast__product-img"
                    src={`${item.image}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="flast__product-bottom">
              <div className="flast__product-name">{item.productname}</div>
              <div className="flast__product-price">
                <Price value={item.price} /> đ
              </div>
              <button className="flast__product-btn">
                <a href="/" style={{ display: userId ? "block" : "none" }}>
                  Thêm yêu thích
                </a>
                <p style={{ display: !userId ? "block" : "none" }}>
                  Thêm yêu thích
                </p>
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="trend">
        <div className="kindWatch">
          <div className="trend__img">
            <img
              src="	https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-03.jpg"
              alt=""
            />
          </div>
          <div className="trend-title">
            <h1>CỔ ĐIỂN</h1>
            <p>Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
          </div>
        </div>
        <div className="kindWatch">
          <div className="trend__img">
            <img
              src="	https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-04.jpg"
              alt=""
            />
          </div>
          <div className="trend-title">
            <h1>SMART WATCH</h1>
            <p>Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
          </div>
        </div>
      </section>
      <section className="product__header-two">
        <h2 className="sppb__header">Sản phẩm mới</h2>
      </section>
      <section className="product__synthetic">
        {newProduct.map((item) => (
          <div className="sanpham synthetic__product sppb" key={item.productid}>
            <div className="flast__product-top">
              <div className="flast__product-top-box">
                <div className="synthetic__product-heart">
                  <i className="bx bxs-heart"></i>
                </div>
                <Link to={`/detail/${item.id}`}>
                  <img
                    className="flast__product-img"
                    src={`${item.image}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="flast__product-bottom">
              <div className="flast__product-name">{item.productname}</div>
              <div className="flast__product-price"><Price value={item.price} /> đ</div>
              <button className="flast__product-btn runNumber">
                <a href="/" style={{ display: userId ? "block" : "none" }}>
                  Thêm yêu thích
                </a>
                <p style={{ display: !userId ? "block" : "none" }}>
                  Thêm yêu thích
                </p>
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="newspaper">
        <div className="newspaper-box newspaper-box1">
          <a href="/">
            <div className="newspaper-img">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-4.jpg"
                alt=""
              />
            </div>
            <h3>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</h3>
            <p>
              Đối với một số doanh nhân, một chiếc đồng hồ đeo tay k chỉ là...
            </p>
          </a>
        </div>
        <div className="newspaper-box newspaper-box2">
          <a href="/">
            <div className="newspaper-img">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
                alt=""
              />
            </div>
            <h3>12 chiếc đồng hồ dành cho nữ giới đắt nhất mọi thời đại</h3>
            <p>
              Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại
              trong hai...
            </p>
          </a>
        </div>
        <div className="newspaper-box newspaper-box3">
          <a href="/">
            <div className="newspaper-img">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg"
                alt=""
              />
            </div>
            <h3>10 Thương hiệu đồng hồ hàng đầu quý ông quan tâm</h3>
            <p>
              1. Audemars Pigues Được thành lập vào năm 1875 bởi Jules-Louis
              Audemars...
            </p>
          </a>
        </div>
      </section>
      <section className="body__border"></section>
      <section className="register">
        <h2>ĐĂNG KÍ NHẬN THÔNG TIN</h2>
        <div className="register-search">
          <div>
            <input type="text" placeholder="Email..." />
          </div>
          <button>ĐĂNG KÍ</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
