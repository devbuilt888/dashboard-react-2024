import react, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  return (
    <>
      <h1>Product item</h1>
      <h1>{productItem?.title}</h1>
      {/* //optional chaining */}
      <img src={productItem?.thumbnail} />
    </>
  );
};

export default Product;
