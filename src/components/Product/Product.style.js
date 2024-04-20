import { styled } from "styled-components";

export const StyledProductTitle = styled.h1`
  color: #594;
  font-size: 20px;
  font-family: system-ui;
`;

export const StyledProductWrapper = styled.div`
  display: flex;
  padding: 20px;

  // can use class inside product wrapper like this:
  .productInfo {
    padding: 0 30px;
  }
`;

export const StyledImg = styled.img`
  width: 400px;
  max-height: 300px;
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  font-family: system-ui;
  display: flex;
  justify-content: space-between;
  width: 30%;
  // flex-direction: column;
`;

export const StyledAddToCart = styled.p`
  width: 400px;
  border: solid 1px #000;
  box-shadow: 5px 10px #888;
  padding: 10px;
`;

export const StyledButton = styled.button`
  height: 40px;
  border-radius: 10%;
  background-color: beige;
`;

export const StyledStockCard = styled.div`
  display: flex;
`;
