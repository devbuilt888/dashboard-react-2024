import react from "react";
import { StyledButton, StyledWrapper } from "./Pagination.styled";

const Pagination = ({
  totalProducts,
  productsPerPage = 30,
  setCurrentPagination,
}) => {
  const paginationButtons = [];

  const handleBtnClick = (i) => {
    console.log(i, "button Clicked");

    setCurrentPagination(i);
  };

  const totalButtons =  Math.ceil(totalProducts / productsPerPage);
  console.log(totalButtons);

  for (let i = 0; i < totalButtons; i++) {
    paginationButtons.push(
      <StyledButton onClick={() => handleBtnClick(i)}>{i + 1}</StyledButton>
    );
  }
  return <StyledWrapper>{paginationButtons}</StyledWrapper>;
};

export default Pagination;
