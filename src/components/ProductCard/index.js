import react from "react";
import { CardWrapper, CardImage, ImgWrapper } from "./ProductCard.styled";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <Link to={`/products/${item.id}`}>
          <CardImage src={item.images[0]} />
        </Link>
      </ImgWrapper>
      <h2>{item.title}</h2>
    </CardWrapper>
  );
};

export default ProductCard;
