import react, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import DataTable from "react-data-table-component";
import ProductsHtmlTable from "./ProductsHtmlTable";
import ProductsDataTable from "./ProductsDataTable";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  let isHtmlTable = false;

  useEffect(() => {
    //Fetching is always an expensive process
    const fetchProducts = async () => {
      const products = await axios.get("https://dummyjson.com/products");

      const productsData = products.data.products;
      setProductsData(productsData);
      console.log(productsData);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <h2>Products HTML Table</h2>
      {isHtmlTable ? (
        <ProductsHtmlTable productsData={productsData} />
      ) : (
        <ProductsDataTable productsData={productsData} />
      )}

      <h2>Products React Data Components Table</h2>
      {!isHtmlTable && <ProductsDataTable productsData={productsData} />}
      <Footer />
    </>
  );
};

export default Products;


//learn about localstorage cookies and why we have to use JSON.parse / JSON.stringify
//store in browser variables like if we clicked on a pop up in the website