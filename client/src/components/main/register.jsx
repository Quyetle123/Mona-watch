import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../utils/userUtil";
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
    const [username, setUsername] = useState()
    const [password, serPassword] = useState()
    const [email, setEmail] = useState()
    const [city, setCtity] = useState()
    const [address, setAddress] = useState()
    const handleSubmit = () => {
        register(uuidv4(), username, password, email, 'User', address, city)
    }
  return (
    <div className="wrapper">
      <div className="form__login">
        <h1 className="form__heading">Đăng kí</h1>
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
              name="password"
              className="form__input"
              placeholder="Mật khẩu"
              onChange={(e) => serPassword(e.target.value)}
            />
            <div className="eye">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="form__group">
            <i className="bx bxs-key"></i>
            <input
              type="password"
              name="confirmPassword"
              className="form__input"
              placeholder="Nhập lại mật khẩu"
            />
            <div className="eye">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="form__group">
            <i className="bx bxs-envelope"></i>
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group">
            <i className="bx bx-location"></i>
            <input
              type="text"
              name="city"
              className="form__input"
              placeholder="Thành phố"
              onChange={(e) => setCtity(e.target.value)}
            />
          </div>
          <div className="form__group">
            <i className="bx bx-map"></i>
            <input
              type="text"
              name="address"
              className="form__input"
              placeholder="Địa chỉ"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="rules">
            <label>
              <input type="radio" name="terms" /> Tôi chấp nhận điều khoản
            </label>
            <span>
              <Link>Đọc điều khoản</Link>
            </span>
          </div>
          <button onClick={handleSubmit} type="submit">Đăng kí</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
