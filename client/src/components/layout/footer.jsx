import React from "react";
import "../../CSS/layout/footer.css"; // Import file CSS của bạn
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRss, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top__title">
          <h2>THÔNG TIN LIÊN HỆ</h2>
          <p>
            <i className="bx bxs-map"></i> 319 C16 Lý Thường Kiệt, Phường 15,
            Quận 11, Tp.HCM
          </p>
          <p>
            <i className="bx bxs-phone-call"></i> 076 922 0162
          </p>
          <p className="email">
            <i className="bx bxs-envelope"></i> demonhunterg@gmail.common@
            mona.media
          </p>
          <p>
            <i className="bx bxl-shopify"></i> demonhunterp
          </p>
          <div className="footer-top-icon">
            <div className="box-icon">
              <FaFacebookF />
            </div>
            <div className="box-icon">
              <FaInstagram />
            </div>
            <div className="box-icon">
              <FaTwitter />
            </div>
            <div className="box-icon">
              <FaRss />
            </div>
            <div className="box-icon">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="footer-top__title">
          <h2>LIÊN KẾT</h2>
          <p>Giới thiệu</p>
          <p>Đồng hồ nam</p>
          <p>Đồng hồ nữ</p>
          <p>Blogs</p>
          <p>Liên hệ</p>
        </div>
        <div className="footer-top__title">
          <h2>HỖ TRỢ</h2>
          <p>Hướng dẫn mua hàng</p>
          <p>Hướng dẫn thanh toán</p>
          <p>Chính sách bảo hành</p>
          <p>Chính sách đổi trả</p>
          <p>Tư vấn khách hàng</p>
        </div>
        <div className="footer-top__title">
          <h2>TẢI ỨNG DỤNG TRÊN</h2>
          <p>
            Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó
            ngay.
          </p>
        </div>
      </div>
      <div className="footer__border"></div>
      <div className="footer-bottom">
        <div>
          <p>Bản quyền thuộc về thiết kế website Quyetle</p>
        </div>
        <div className="footer-bottom__map">
          <p style={{ color: "#fff" }} id="kq">
            Vị trí của bạn
          </p>
          <div>
            <i
              style={{ fontSize: "30px", cursor: "pointer" }}
              className="bx bxs-map"
            ></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
