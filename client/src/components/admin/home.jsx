import React from "react";
import "../../CSS/admin/home.css";
import { CiDollar } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import { TiWatch } from "react-icons/ti";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AdminHome = () => {
  const data1 = [
    { month: "Jan", male: 4000, female: 2400 },
    { month: "Feb", male: 3000, female: 1398 },
    { month: "Mar", male: 2000, female: 9800 },
    { month: "Apr", male: 2780, female: 3908 },
    { month: "May", male: 1890, female: 4800 },
    { month: "Jun", male: 2390, female: 3800 },
    { month: "Jul", male: 3490, female: 4300 },
    { month: "Aug", male: 4000, female: 5000 },
    { month: "Sep", male: 3000, female: 2000 },
    { month: "Oct", male: 5000, female: 3500 },
    { month: "Nov", male: 4700, female: 3300 },
    { month: "Dec", male: 6000, female: 4400 },
  ];
  const data2 = [
    { name: 'Male Watches', value: 4000 },
    { name: 'Female Watches', value: 3000 },
  ];
  
  const COLORS = ['#af1316', '#e8c65b'];
  return (
    <div className="adminHome">
      <div className="mainStatistics">
        <div className="mainStatistics-box">
          <div>
            <CiDollar style={{ fontSize: "70px", color: "#a6bc8d" }} />
          </div>
          <div className="mainStatistics-title">
            <h4>Tổng thu nhập</h4>
            <h2>300000000 đ</h2>
          </div>
        </div>
        <div className="mainStatistics-box">
          <div>
            <PiUserCircleLight style={{ fontSize: "70px", color: "#7c749b" }} />
          </div>
          <div className="mainStatistics-title">
            <h4>Tiếp cận</h4>
            <h2>100 tài khoản</h2>
          </div>
        </div>
        <div className="mainStatistics-box">
          <div>
            <AiOutlineTransaction
              style={{ fontSize: "70px", color: "#c9cacc" }}
            />
          </div>
          <div className="mainStatistics-title">
            <h4>Sản phẩm đã bán</h4>
            <h2>300 sản phẩm</h2>
          </div>
        </div>
        <div className="mainStatistics-box">
          <div>
            <TiWatch style={{ fontSize: "70px", color: "#b97c7b" }} />
          </div>
          <div className="mainStatistics-title">
            <h4>Sản phẩm đang bán</h4>
            <h2>30000 sản phẩm</h2>
          </div>
        </div>
      </div>
      <div className="chart">
        <div className="chart__left">
          <BarChart width={720} height={400} data={data1}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="male" fill="#af1316" />
            <Bar dataKey="female" fill="#e8c65b" />
          </BarChart>
        </div>
        <div className="chart__left">
          <PieChart width={400} height={400}>
            <Pie
              data={data2}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
