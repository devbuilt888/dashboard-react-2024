import logo from "./logo.svg";
import "./App.css";
import ChartWrapper from "./components/ChartWrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WidgetWrapper from "./components/WidgetWrapper";
import ErrorPage from "./components/ErrorPage";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Product from "./components/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/category",
      element: <Categories />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/:id",
      element: <Product />,
    },
    //dynamic api routing:
    //1 create path in router with dynamic syntax
    //(when path is accessed in the browser we somehow display a product page of the product id corresponding to the id passed in the url)
    //2 create "file product" to handle dynamic display of product.id

    //3 fetch product.id  from api json
  ]);

  return <RouterProvider router={router} />;
}

export default App;
