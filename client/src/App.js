import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./About.js";
import Cats from "./Cats.js";
import Dogs from "./Dogs.js";
import Acessories from "./Acessories.js";
import { productsData2 } from "./api/Api";
import { productsData3 } from "./api/Api";
import { productsData4 } from "./api/Api";


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/about",
        element: <About />,
        loader: productsData,
      },
      {
        path: "/cats",
        element: <Cats />,
        loader: productsData2,
      },
      {
        path: "/dogs",
        element: <Dogs />,
        loader: productsData3,
      },
      {
        path: "/acessories",
        element: <Acessories />,
        loader: productsData4,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
