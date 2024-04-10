import React from "react";
import { Link } from "react-router-dom";
import { StyledLI, StyledUL } from "./SearchSuggestions.styled";

const SearchSuggestions = ({ 
    suggestionList
 }) => {
  //ul li for the suggestions
  return (
    <StyledUL>
      {suggestionList.map((item) => (
        <StyledLI>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </StyledLI>
      ))}
    </StyledUL>
  );
};

export default SearchSuggestions;
