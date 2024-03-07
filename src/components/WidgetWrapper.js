import react, { useEffect, useState } from "react";
import axios from "axios";
import Widget from "./Widget";

const WidgetWrapper = () => {
  //   let getWidget = () => {
  //     let newArr = [];
  //     for (let i = 0; i < 4; i++) {
  //       newArr.push(<Widget />);
  //     }
  //     return newArr;
  //   };

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsArr = await axios.get("https://dummyjson.com/products");
      setProducts(productsArr.data.products);
      console.log(productsArr.data);
    };

    const getUsers = async () => {
      const usersArr = await axios.get("https://dummyjson.com/users");
      setUsers(usersArr.data.users);
      console.log(usersArr.data);
    };

    getProducts();
    getUsers();
  }, []);

  const countObjectProps = (obj) => {
    return Object.keys(obj);
  };

  return (
    <nav className="widgetWrapper widgetGridContainer">
      {/* {getWidget()} */}
      <Widget
        key="1"
        color="green"
        textToDisplay="products"
        count={products.length}
      />
      <Widget
        key="2"
        color="#00f"
        textToDisplay="users"
        count={users.length}
      />
      <Widget key="3" color="rgb(200, 100, 100)" textToDisplay="" count="" />
      <Widget key="4" color="yellow" textToDisplay="" count="" />
    </nav>
  );
};

export default WidgetWrapper;
