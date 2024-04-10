import react, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import SearchBar from "./SearchBar";
import DataTable from "react-data-table-component";
import ProductsHtmlTable from "../ProductsHtmlTable";
import ProductsDataTable from "../ProductsDataTable";
import { StyledTitleProducts } from "./Products.styled";
import { useNavigate } from "react-router-dom";
import SearchSuggestions from "./SearchSuggestions";
import Pagination from "../Pagination";
import loader from "../../Assets/loader001.gif";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [suggestionList, setSuggestionList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentPagination, setCurrentPagination] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    //Fetching is always an expensive process
    const fetchProducts = async () => {
      setProductsLoading(true);
      const products = await axios.get(
        `https://dummyjson.com/products?skip=${currentPagination * 30}`
      );

      const productsData = products.data.products;
      const totalProductsData = products.data.total;
      
      setProductsData(productsData);
      setTotalProducts(totalProductsData);
      console.log(productsData);
      setProductsLoading(false);
    };
    fetchProducts();
  }, [currentPagination]);

  return (
    <>
      <Header />
      <SearchBar
        productsData={productsData}
        setErrorMsg={setErrorMsg}
        setSuggestionList={setSuggestionList}
      />
      {console.log(suggestionList)}

      {!!suggestionList.length && (
        <SearchSuggestions suggestionList={suggestionList} />
      )}
      <StyledTitleProducts>Products HTML Table</StyledTitleProducts>
      {!productsLoading ? (
        <ProductsHtmlTable productsData={productsData} />
      ) : (
        <img src={loader}></img>
      )}
      <Pagination
        totalProducts={totalProducts}
        setCurrentPagination={setCurrentPagination}
      />
      <StyledTitleProducts>
        Products React Data Components Table
      </StyledTitleProducts>
      {!productsLoading && <ProductsDataTable productsData={productsData} />}
      <Footer />
    </>
  );
};

export default Products;

//learn about localstorage cookies and why we have to use JSON.parse / JSON.stringify

//store in browser variables like if we clicked on a pop up in the website

//all url related topics in react are usually related to react router dom

//if something starts with use is a hook
