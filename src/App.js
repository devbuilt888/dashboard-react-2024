import react, { useState, useEffect } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/category",
      element: <Categories />,
    },
    {
      path: "/products",
      element: (
        <Products isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      ),
    },
    {
      path: "/products/:id",
      element: <Product isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />,
    },
    //dynamic api routing:
    //1 create path in router with dynamic syntax
    //(when path is accessed in the browser we somehow display a product page of the product id corresponding to the id passed in the url)
    //2 create "file product" to handle dynamic display of product.id

    //3 fetch product.id  from api json
  ]);

  return (
    <div className={`App`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
