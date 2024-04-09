import react from "react";
import { Link } from "react-router-dom";

const ProductsHtmlTable = ({ productsData }) => {
  return (
    <table>
      <tr>
        <td>Id</td>
        <td>Product</td>
        <td>Category</td>
        <td>Price</td>
      </tr>
      {productsData.map((item, index) => {
        return (
          <tr>
            <td>{index}</td>

            <td>
              <Link to={`/products/${item.id}`}>{item.title}</Link>
            </td>
            <td>{item.category}</td>
            <td>{item.price}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default ProductsHtmlTable;
