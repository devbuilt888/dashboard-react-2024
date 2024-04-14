import react from "react";
import { CardWrapper, CardImage } from "./ProductCard.styled";

const ProductCard = ({ item }) => {
  return (
    <CardWrapper>
      <CardImage src={item.images[0]} />
      <h2>{item.title}</h2>
    </CardWrapper>
  );
};

export default ProductCard;
