import React from "react";
import { useLoaderData } from "react-router-dom";
import dayjs from "dayjs";
import { deleteOrder } from "../../utils/orderUtil";
import { NumericFormat } from "react-number-format";

const Order = () => {
  const { orders } = useLoaderData();
  const Price = ({ value }) => (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={0}
    />
  );

  const handleDelete = (id) => {
    deleteOrder(id);
    window.location.reload();
  };

  return (
    <main>
      <p style={{ fontSize: "40px", padding: "50px 150px 0" }}>
        Đơn hàng của bạn
      </p>
      <section style={{ padding: "0 150px 50px" }}>
        {orders.map((order) => {
          return (
            <div
              style={{
                minHeight: "200px",
                padding: "20px",
                backgroundColor: "#dee2e6",
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
                lineHeight: "2.5",
                marginTop: "50px",
              }}
            >
              <p>
                <b style={{ color: "#C89979" }}>
                  Đồng hồ Hải Triều xin chân thành cảm ơn bạn đã tin tưởng và
                  mua hàng tại website của chúng tôi!
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
                  Trạng thái đơn hàng: <b>{order.status}</b>
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
              <div>
                <button
                  style={{
                    display:
                      order.status === "Đang đóng gói" ? "block" : "none",
                  }}
                  type="submit"
                  className="flast__product-btn"
                  onClick={() => handleDelete(order.id)}
                >
                  Hủy đơn hàng
                </button>
                <p
                  style={{
                    color: "#C89979",
                    display:
                      order.status === "Đang vận chuyển" ? "block" : "none",
                  }}
                >
                  <i>
                    Đơn hàng đang được vận chuyển đến vị trí của bạn. Vui lòng
                    chuẩn bị số tiền tương ứng
                  </i>
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <h3 style={{ margin: "10px 150px 0 150px", fontSize: "30px" }}>
        Bài viết nổi bật
      </h3>
      <section className="newspaper">
        <div className="newspaper-box newspaper-box1">
          <span>
            <div className="newspaper-img">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-4.jpg"
                alt=""
              />
            </div>
            <h3>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</h3>
            <p>
              Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ
              là...
            </p>
          </span>
        </div>
        <div className="newspaper-box newspaper-box2">
          <span>
            <div className="newspaper-img">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
                alt=""
              />
            </div>
            <h3>12 chiếc đồng hồ dành cho nữ giới đắt nhất mọi thời đại</h3>
            <p>
              Công nghiệp sản xuất đồng hồ sang trọng đang có dấu hiệu chững lại
              trong hai...
            </p>
          </span>
        </div>
        <div className="newspaper-box newspaper-box3">
          <span>
            <div className="newspaper-img">
              <img
                src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg"
                alt=""
              />
            </div>
            <h3>10 Thương hiệu đồng hồ hàng đầu mà quý ông quan tâm</h3>
            <p>
              1. Audemars Piguet - Được thành lập vào năm 1875 bởi Jules-Louis
              Audemars...
            </p>
          </span>
        </div>
      </section>
    </main>
  );
};

export default Order;
