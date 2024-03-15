import react from "react";

const ProductsHtmlTable = ({productsData}) => {
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
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default ProductsHtmlTable;
