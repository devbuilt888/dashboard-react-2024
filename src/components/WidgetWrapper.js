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

  const usersAgeCheck = () => {
    const arrayUnder25 = users.filter((item) => item.age > 25);
console.log(arrayUnder25);
    if (arrayUnder25.length > 100) {
      return true;
    } else {
      return false;
    }
  };

//new goals, make 

  //users under 25 get counted
  //if this number is under 10 return false, else return true

  return (
    <nav className="widgetWrapper widgetGridContainer">
      {/* {getWidget()} */}
      <Widget
        key="1"
        color="green"
        textToDisplay="products"
        count={products.length}
      />

      {usersAgeCheck() && (
        <Widget
          key="2"
          color="#00f"
          textToDisplay="users"
          count={users.length}
        />
      )}
      <Widget key="3" color="rgb(200, 100, 100)" textToDisplay="" count="" />
      <Widget key="4" color="yellow" textToDisplay="" count="" />
    </nav>
  );
};

export default WidgetWrapper;
