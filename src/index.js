import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/category",
    element: <Categories />,
  },
  {
    path: "/products",
    element: <Products />
  },
 {
  path:"/products/:id",
  element: <Product />
 }
  //dynamic api routing: 
  //1 create path in router with dynamic syntax
  //(when path is accessed in the browser we somehow display a product page of the product id corresponding to the id passed in the url)
  //2 create "file product" to handle dynamic display of product.id

  //3 fetch product.id  from api json

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

