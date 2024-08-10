import React from "react";
import "../../CSS/layout/header.css";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiSolidMap } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaShoppingCart,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  const userid = localStorage.getItem("id")
  const displayName = localStorage.getItem("displayName");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const navigate = useNavigate()
  const addToCart = (e) => {
    e.preventDefault();
      if(email){
        navigate(`/cart/${userid}`)
      }else{
        window.confirm("Bạn cần đăng nhập để xem được giỏ hàng");
      }
  }

  const logOut = () => {
    localStorage.removeItem("displayName");
    localStorage.removeItem("email");
    localStorage.removeItem("role")
    localStorage.removeItem("id")
    localStorage.removeItem("uid")
    localStorage.removeItem("city")
    window.location.reload();
  };

  return (
    <header>
      <div className="header__top">
        <ul className="header__top-list">
          <li className="header__top-item">
            <BiSolidMap />
            <p>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</p>
          </li>
          <li className="header__top-item">
            <FaPhoneAlt />
            <p>076 922 0162</p>
          </li>
        </ul>
        <ul className="header__top-list">
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
        </ul>
      </div>
      <div className="header__bottom">
        <div className="header__bottom-menu">
          <i className="bx bx-menu"></i>
        </div>
        <div className="header__bottom-left">
          <img
            src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png"
            alt=""
          />
        </div>
        <div className="header__bottom-search">
          <div>
            <input type="text" placeholder="Tìm kiếm..." />
          </div>
          <button>
            <FiSearch style={{ fontSize: "22px", color: "white" }} />
          </button>
        </div>
        <div className="header__bottom-right">
          <div>
            <p className="username">{email ? displayName : "Đăng nhập"}</p>
            <div className="login__menu">
              <ul>
                {role === "Admin" && (
                  <>
                    <li>
                      <span><Link style={{textDecoration: "none"}} to="/admin">Trang quản trị</Link></span>
                    </li>
                  </>
                )}
                {email && (
                  <li>
                    <span>
                      <Link style={{textDecoration: "none"}} to={`/updateUser/${userid}`}>Thông tin cá nhân</Link>
                    </span>
                  </li>
                )}
                {email && (
                  <li>
                    <span>
                      <Link style={{ textDecoration: "none", color: "white" }} to={`/order/${userid}`}>Đơn hàng của bạn</Link>
                    </span>
                  </li>
                )}
                <li>
                  <span onClick={() => email ? logOut() : console.log("chuyển trang")}>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="./login"
                    >
                      {email ? "Đăng nhập tài khoản khác" : "Đăng nhập"}
                    </Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/register">Đăng kí thêm tài khoản mới</Link>
                  </span>
                </li>
                {email && (
                  <li>
                    <span onClick={logOut}>Đăng xuất</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <a href="/">
            <i className="bx bxs-heart"></i>
          </a>
          <span onClick={addToCart}>
            {/* <Link onClick={addToCart}  style={{ textDecoration: "none", color: "white" }} to={email&&`/cart/${userid}`}> */}
              <FaShoppingCart style={{ fontSize: "40px" }} />
            {/* </Link> */}
          </span>
        </div>
      </div>
      <div className="header__menu">
        <span>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            TRANG CHỦ
          </Link>
        </span>
        <span>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/menWatch/669f4473e55fab41309a533f"
          >
            ĐỒNG HỒ NAM
          </Link>
        </span>
        <span>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/womenWatch/669f4481e55fab41309a5344"
          >
            ĐỒNG HỒ NỮ
          </Link>
        </span>
        <span>BLOGS</span>
        <span>LIÊN HỆ</span>
      </div>
    </header>
  );
};

export default Header;
