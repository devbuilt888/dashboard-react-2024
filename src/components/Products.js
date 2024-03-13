import react, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import DataTable from 'react-data-table-component';


const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const columns = [
    {
		name: 'id',
		selector: row => row.id,
        sortable: true
	},
	{
		name: 'Title',
		selector: row => row.title,
        sortable: true
	},
	{
		name: 'Category',
		selector: row => row.category,
        sortable: true
	},
    {
		name: 'Price',
		selector: row => row.price,
        sortable: true
	},
    {
		name: 'Stars',
		selector: row => row.rating,
        sortable: true
	}
];
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get("https://dummyjson.com/products");

      const productsData = products.data.products;
      setProductsData(productsData);
      console.log(productsData);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <h2>Products HTML Table</h2>
      <table>
        <tr>
            <td>Id</td>
            <td>Product</td>
            <td>Category</td>
            <td>Price</td>
        </tr>
        {productsData.map((item, index) => {
            return <tr>
                <td>{index}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>

            </tr>
        })}
      </table>
      <h2>Products React Data Components Table</h2>

      <DataTable
			columns={columns}
			data={productsData}
		/>
      <Footer />
    </>
  );
};

export default Products;
