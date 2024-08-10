import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import dayjs from "dayjs";
import { Select } from "antd";
import { updateOrder } from "../../utils/orderUtil";
import { NumericFormat } from "react-number-format";

const AllOrder = () => {
  const { allOrder } = useLoaderData();
  const [statusSave, setStatusSave] = useState();
  const handleUpload = (id) => {
    updateOrder(id, statusSave);
  };

  const Price = ({ value }) => (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={0}
    />
  );

  return (
    <div style={{ width: "100%" }}>
      <section style={{ padding: "0 20px" }}>
        {allOrder.map((order) => {
          return (
            <div
              key={order.id}
              style={{
                minHeight: "200px",
                padding: "20px",
                backgroundColor: "#dee2e6",
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
                lineHeight: "2.5",
                marginTop: "20px",
              }}
            >
              <p>
                <b style={{ color: "#C89979" }}>
                  Đơn hàng giao đến địa chỉ {order.address} TP. {order.city}
                </b>
              </p>
              <ul style={{ listStyle: "none", lineHeight: "1.8" }}>
                <li>
                  Mã đơn hàng: <b>{order.id}</b>
                </li>
                <li>
                  Ngày:{" "}
                  <b>{dayjs(order.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</b>
                </li>
                <li>
                  Tổng cộng: <b><Price value={order.total} /> đ</b>
                </li>
                <li>
                  Trạng thái đơn hàng:
                  <Select
                    defaultValue={order.status}
                    onChange={(value) => setStatusSave(value)}
                    style={{ width: 300, marginLeft: "20px" }}
                    options={[
                      { value: "Đang đóng gói", label: "Đang đóng gói" },
                      { value: "Đang vận chuyển", label: "Đang vận chuyển" },
                      { value: "Đã giao hàng", label: "Đã giao hàng" },
                    ]}
                  />
                </li>
                <li>
                  Phương thức thanh toán: <b>Thanh toán khi nhận hàng</b>
                </li>
                <li>
                  Chi tiết đơn hàng:
                  <ul style={{ marginLeft: "30px" }}>
                    {order.productname.map((productname, index) => {
                      const quantity = order.quantity[index];
                      return (
                        <li>
                          {quantity} sản phẩm {productname}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
              <button
                type="submit"
                className="flast__product-btn"
                onClick={handleUpload(order.id)}
              >
                Cập nhật trạng thái
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllOrder;
