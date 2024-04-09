import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ productsData, setErrorMsg, setSuggestionList }) => {
  const [userSearchInput, setUserSearchInput] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const userData = e.target.value;
    setUserSearchInput(userData);

    const filteredData = productsData.filter((item) =>
      item.title.toLowerCase().includes(userData.toLowerCase())
    );
    setSuggestionList(filteredData);

    if (!userData) {
      setErrorMsg("");
      setSuggestionList("");
    }
  };
  const filteredProducts = productsData.filter(
    (item) => item.title.toLowerCase() === userSearchInput.toLowerCase()
  );
  const handleProductSearch = () => {
    if (!productsData) {
      return;
    }

    console.log(filteredProducts);
    if (filteredProducts.length > 0) {
      navigate(`/products/${filteredProducts[0].id}`);
    } else {
      //negative scenario
      setErrorMsg("We do not have this product");
    }

    //show dropdown with includes method
    //break products down into the products list wrapper + search input component  the suggestions component
  };
  return (
    <>
      <input
        type="text"
        placeholder="set product name"
        onChange={handleInputChange}
        value={userSearchInput}
      ></input>

      <button type="button" onClick={handleProductSearch}>
        Search
      </button>
    </>
  );
};

export default SearchBar;
