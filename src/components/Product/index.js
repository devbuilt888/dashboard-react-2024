import react, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header";
import {
  StyledProductWrapper,
  StyledProductTitle,
  StyledImg,
  StyledParagraph,
  StyledAddToCart,
  StyledButton,
  StyledStockCard,
} from "./Product.style";
import Rating from "../Rating";
const Product = () => {
  const [productItem, setProductItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductItem(item.data);
    };

    fetchItem();
  }, []);
  const discountProd =
    productItem?.price -
    ((productItem?.price * productItem?.discountPercentage) / 100).toFixed(2);
  return (
    <>
      <Header />
      <StyledProductWrapper>
        <div>
          <StyledImg src={productItem?.thumbnail} />
        </div>
        <div className="productInfo">
          <StyledProductTitle>{productItem?.title}</StyledProductTitle>
          <hr />
          <div>
            <StyledParagraph>
              {" "}
              {/* // {productItem?.rating?.toFixed(1)} reviews */}
            </StyledParagraph>
            <Rating rate={productItem?.rating}></Rating>
            {productItem?.rating} stars
          </div>

          <hr />
          {/* calculate real price based on the discount x price / 100 */}
          <StyledParagraph>
            Price: ${discountProd}
            <StyledStockCard>
              <s>${productItem?.price}</s>
            </StyledStockCard>
          </StyledParagraph>
          <hr />
          <StyledParagraph>{productItem?.description}</StyledParagraph>

          {/* condition that stock is more than 0 */}
        </div>
        <StyledAddToCart>
          <StyledParagraph>Price: ${discountProd}</StyledParagraph> <hr />
          <StyledParagraph>
            Status: {productItem?.stock > 0 ? " In Stock" : "Out of stock"}
          </StyledParagraph>
          <hr />
          <StyledButton>Add to cart</StyledButton>
        </StyledAddToCart>
      </StyledProductWrapper>

      {/* //optional chaining */}
    </>
  );
};

export default Product;
