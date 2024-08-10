/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../CSS/admin/header.css";
import { Link } from "react-router-dom";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { FiWatch } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { IoBag } from "react-icons/io5";
const Header = () => {
  return (
    <header className="header__admin">
      <div className="header__admin-top">
        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png" />
      </div>
      <div className="header__adim-menu">
        <span className="header__adim-link">
          <IoMdHome style={{ color: "white" }} />
          <Link
            to="./"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Trang chủ
          </Link>
        </span>
        <span className="header__adim-link">
          <HiOutlineDocumentAdd style={{ color: "white" }} />
          <Link
            to="./addproduct"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Thêm sản phẩm
          </Link>
        </span>
        <span className="header__adim-link">
          <FiWatch style={{ color: "white" }} />
          <Link
            to="./allProducts"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Tất cả sản phẩm
          </Link>
        </span>
        <span className="header__adim-link">
          <HiOutlineDocumentAdd style={{ color: "white" }} />
          <Link
            to="./addCategory"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Thêm danh mục
          </Link>
        </span>
        <span className="header__adim-link">
          <BiCategoryAlt style={{ color: "white" }} />
          <Link
            to="./allCategories"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Tất cả danh mục
          </Link>
        </span>
        <span className="header__adim-link">
          <IoBag style={{ color: "white" }} />
          <Link
            to="./allOrder"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Tất cả đơn hàng
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
