import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "../../CSS/login.css";
import { useNavigate } from "react-router-dom";
import { graphQLRequest } from "../../utils/request";
import "../../firebase/config.js";
import { login, loginWithGoogle } from "../../utils/userUtil.js";

const Login = () => {
  const author = getAuth();
  const navigate = useNavigate()
  const hadleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const {
      user: { uid, displayName, email, accessToken },
    } = await signInWithPopup(author, provider);
    localStorage.setItem("uid", uid);
    localStorage.setItem("displayName", displayName);
    localStorage.setItem("email", email);
    localStorage.setItem("accessToken", accessToken);
    window.location.reload()
    const response = await graphQLRequest({
      query: `mutation Register($uid: String!, $username: String!, $email: String) {
        register(uid: $uid, username: $username, email: $email) {
        uid,
        username,
        email
        }
      }`,
      variables: {
        uid,
        username: displayName,
        email,
      },
    });

    if (response && response.data) {
      const { data } = response;
      console.log("register", { data });
    } else {
      
    }
    
  };

  const email = localStorage.getItem("email")
  useEffect(() => {
    const fetchAccessGg = async () => {
      try {
        const accessGg = await loginWithGoogle(email);
        localStorage.setItem("id", accessGg.loginWithGoogle.id);
        localStorage.setItem("displayName", accessGg.loginWithGoogle.username);
        localStorage.setItem("role", accessGg.loginWithGoogle.role);
        localStorage.setItem("address", accessGg.loginWithGoogle.address);
        localStorage.setItem("city", accessGg.loginWithGoogle.city);
        navigate("/")
      } catch (error) {
        console.error('Error logging in with Google:', error);
      }
    };
    fetchAccessGg();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const handleLogin = async () => {
    const access = await login(username, password)
    if(access.login) {
      localStorage.setItem("uid", access.login.uid);
      localStorage.setItem("id", access.login.id);
      localStorage.setItem("displayName", access.login.username);
      localStorage.setItem("email", access.login.email);
      localStorage.setItem("role", access.login.role);
      localStorage.setItem("address", access.login.address);
      localStorage.setItem("city", access.login.city);
      if(access.login.role === "Admin") {
        navigate("/admin")
      } else{
        navigate("/")
      }
      
    } else{
      alert("Tên đăng nhập và mật khẩu chưa đúng")
    }
  }

  return (
    <div className="wrapper">
      <div className="form__login">
        <h1 className="form__heading">Đăng nhập</h1>
        <div className="form-box">
          <div className="form__group">
            <i className="bx bx-user"></i>
            <input
              type="text"
              name="user"
              className="form__input"
              placeholder="Tên đăng nhập"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form__group">
            <i className="bx bxs-key"></i>
            <input
              type="password"
              name="pass"
              className="form__input"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="eye">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="remember-forgot">
            <input type="checkbox" name="" id="" />
            Lưu tài khoản
            <a href="./formMail.php">Quên mật khẩu</a>
          </div>
          <button type="submit" onClick={handleLogin}>Đăng nhập</button>
          <span className="diffrent-title">
            --------------------- Lựa chọn khác ---------------------
          </span>
          <div className="diffrent-login">
            <button className="login-facebook">
              <i className="bx bxl-facebook-square"></i>Facebook
            </button>
            <span className="login-or">Hoặc</span>
            <button className="login-google" onClick={hadleLoginWithGoogle}>
              <i className="bx bxl-google"></i>Google
            </button>
          </div>
          <div className="remember-forgot">
            <p></p>
            <a href="./register.php">Đăng kí tài khoản</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
