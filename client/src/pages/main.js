import React from "react";

import Footer from "../components/layout/footer";
import FormHidden from "../components/layout/formHidden";
import Header from "../components/layout/header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <FormHidden />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
