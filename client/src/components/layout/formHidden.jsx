import React from "react";
import "../../CSS/style.css";

const FormHidden = () => {
  return (
    <>
      <section className="modal-login" style={{ display: "none" }}>
        <div className="wrapper">
          <form action="../back-end/login.php" className="form__login">
            <div className="form__top">
              <i className="bx bx-x-circle"></i>
            </div>
            <h1 className="form__heading">Đăng nhập</h1>
            <div className="form-box">
              <div className="form__group">
                <i className="bx bxs-envelope"></i>
                <input
                  type="text"
                  name="user"
                  className="form__input form__input-email"
                  placeholder="Tên đăng nhập"
                />
              </div>
              <div className="form__group">
                <i className="bx bxs-key"></i>
                <input
                  type="password"
                  name="pass"
                  className="form__input form__input-pass"
                  placeholder="Mật khẩu"
                />
                <div className="eye"></div>
              </div>
              <div className="remember-forgot">
                <input type="checkbox" name="remember" id="remember" /> Lưu tài
                khoản
                <a href="/">Quên mật khẩu</a>
              </div>
              <div className="form__notify form__notify-phone"></div>
              <div className="form__notify form__notify-pass"></div>
              <button type="submit" className="login-btn">
                Đăng nhập
              </button>
              <span className="diffrent-title">
                --------------------- Lựa chọn khác ---------------------
              </span>
              <div className="diffrent-login">
                <div className="login-facebook">
                  <i className="bx bxl-facebook-square"></i> Facebook
                </div>
                <span className="login-or">Hoặc</span>
                <div className="login-google">
                  <i className="bx bxl-google"></i> Google
                </div>
              </div>
              <div className="remember-forgot">
                <p style={{ marginTop: "15px" }}></p>
                <a href="./register.php">Tạo tài khoản khác</a>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="list">
        <div className="list-box">
          <div className="list__menu">
            <ul className="list__menu-list">
              <li className="list__menu-item">
                <div>
                  <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <button>
                  <i className="bx bx-search"></i>
                </button>
              </li>
              <li className="list__menu-item">
                <a href="/">TRANG CHỦ</a>
              </li>
              <li className="list__menu-item">
                <a href="/">GIỚI THIỆU</a>
              </li>
              <li className="list__menu-item">
                <a href="/">ĐỒNG HỒ NAM</a>
              </li>
              <li className="list__menu-item">
                <a href="/">ĐỒNG HỒ NỮ</a>
              </li>
              <li className="list__menu-item">
                <a href="/">BLOGS</a>
              </li>
              <li className="list__menu-item">
                <a href="/">LIÊN HỆ</a>
              </li>
              <li className="list__menu-item">
                <a href="/">ĐĂNG NHẬP</a>
              </li>
              <li className="list__menu-item">
                <a href="/">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="/">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="/">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="list__modal"></div>
        </div>
      </section>
    </>
  );
};

export default FormHidden;
