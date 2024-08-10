import { Outlet } from "react-router-dom";
import Header from "../components/admin/header";
import HeaderTop from "../components/admin/headerTop";

export const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const Admin = () => {
  return (
    <div style={{display: "flex"}}>
      <Header />
      <div style={{width: "85%", marginLeft: "15%"}}>
        <HeaderTop />
        <AdminLayout />
      </div>
    </div>
  );
};

export default Admin;
