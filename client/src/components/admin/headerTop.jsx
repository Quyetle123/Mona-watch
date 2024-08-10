import React from "react"
import "../../CSS/admin/headertop.css"
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HeaderTop = () => {
    const adminName = localStorage.getItem("displayName")
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem("displayName");
        localStorage.removeItem("email");
        localStorage.removeItem("role")
        localStorage.removeItem("id")
        localStorage.removeItem("uid")
        localStorage.removeItem("city")
        navigate('/')
    };
    return(
        <div className="headerAdmin__top">
            <div className="headerAdmin__top-search">
                <span>
                    <IoMenu style={{fontSize: "28px"}} />
                </span>
            </div>
            <div className="headerAdmin__top-menu">
                <span>{adminName}</span>
                <span onClick={logOut}>Đăng xuất</span>
            </div>
        </div>
    )
}

export default HeaderTop