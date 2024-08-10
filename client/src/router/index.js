import { Outlet, createBrowserRouter } from "react-router-dom";
import Admin from "../pages/admin";
import AdminHome from "../components/admin/home";
import AddCategory from "../components/admin/addCategory";
import Main from "../pages/main";
import Home from "../components/main/home";
import Login from "../components/main/login";
import AllCategories from "../components/admin/allCategories";
import { categoryLoader, catogoriesLoader } from "../utils/categoriesUtil";
import UpdateCategory from "../components/admin/updateCayegory";
import AddProduct from "../components/admin/addProduct";
import UploadFile from "../components/admin/uploadFile";
import Allproducts from "../components/admin/allProducts";
import {
  homeProduct,
  productLoader,
  productsLoader,
  productWithCategortId
} from "../utils/productesUtil";
import UpdateProduct from "../components/admin/updateProduct";
import MentWatch from "../components/main/menWatch";
import WomentWatch from "../components/main/womenWatch";
import Cart from "../components/main/cart";
import Detail from "../components/main/detail";
import { cartsLoader } from "../utils/cartUtil";
import UpdateUser from "../components/main/updateUser";
import { userLoader } from "../utils/userUtil";
import Order from "../components/main/order";
import { allOrderLoader, ordersLoader } from "../utils/orderUtil";
import Register from "../components/main/register";
import AllOrder from "../components/admin/allOrder";

const MainLayout = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <Admin />,
        path: "/admin",
        children: [
          {
            index: true,
            element: <AdminHome />,
          },
          {
            path: "addCategory",
            element: <AddCategory />,
          },
          {
            path: "allCategories",
            element: <AllCategories />,
            loader: catogoriesLoader,
          },
          {
            path: "updateCategory/:categoryid",
            element: <UpdateCategory />,
            loader: categoryLoader,
          },
          {
            path: "allProducts",
            element: <Allproducts />,
            loader: productsLoader,
          },
          {
            path: "addProduct",
            element: <AddProduct />,
            loader: catogoriesLoader,
          },
          {
            path: "updateProduct/:productid",
            element: <UpdateProduct />,
            loader: productLoader,
          },
          {
            path: "allOrder",
            element: <AllOrder />,
            loader: allOrderLoader,
          },
          {
            path: "uploadFile",
            element: <UploadFile />,
          },
        ],
      },
      {
        element: <Main />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: homeProduct,
          },
          {
            path: "menWatch/:categoryid",
            element: <MentWatch />,
            loader: productWithCategortId,
          },
          {
            path: "womenWatch/:categoryid",
            element: <WomentWatch />,
            loader: productWithCategortId,
          },
          {
            path: "detail/:productid",
            element: <Detail />,
            loader: productLoader,
          },
          {
            path: "/cart/:userid",
            element: <Cart />,
            loader: cartsLoader,
          },
          {
            path: "/updateUser/:userid",
            element: <UpdateUser />,
            loader: userLoader,
          },
          {
            path: "/order/:userid",
            element: <Order />,
            loader: ordersLoader,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
