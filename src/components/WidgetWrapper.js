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
  const [categories, setCategories] = useState([]);

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

  // const countObjectProps = (obj) => {
  //   return Object.keys(obj);
  // };

  const getCategories = () => {
    //storing an arr of categories with repeated values into a set,
    // will reduce the arr into an object of non-duplicate categories
    let categoriesSet = new Set([]);

    //map can run a function for each item,
    //in this case just add the category of each item
    //into the set categoriesSet to eliminate duplicates
    products.map((item) => categoriesSet.add(item.category));

    //is there a way to set categories without infinite re-rendering?
    //how to include this code on useEffect?
    //how to avoid unnecesary rendering
    //how to avoid having to run getCategories over and over

    console.log(categoriesSet);

    return categoriesSet;
  }; 


  const usersAgeCheck = () => {
    const arrayUnder25 = users.filter((item) => item.age > 25);
    console.log(arrayUnder25);
    if (arrayUnder25.length > 10) {
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

      {getCategories() && (
        <Widget
          key="3"
          color="rgb(200, 100, 100)"
          textToDisplay=""
          count={getCategories}
        />
      )}

      <Widget key="4" color="yellow" textToDisplay="" count={getCategories().size} />
    </nav>
  );
};

export default WidgetWrapper;
