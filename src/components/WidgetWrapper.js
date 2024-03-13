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
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsArr = await axios.get("https://dummyjson.com/products");
      setProducts(productsArr.data.products);
      // console.log(productsArr.data);
    };

    const getUsers = async () => {
      const usersArr = await axios.get("https://dummyjson.com/users");
      setUsers(usersArr.data.users);
      // console.log(usersArr.data);
    };

    getProducts();
    getUsers();
    getCategories2();
  }, []);

  // GET CATEGORIES

  // const getCategories = () => {

  //storing an arr of categories with repeated values into a set,
  // will reduce the arr into an object of non-duplicate categories

  // let categoriesSet = new Set([]);

  //map can run a function for each item,
  //in this case just add the category of each item
  //into the set categoriesSet to eliminate duplicates

  // products.map((item) => categoriesSet.add(item.category));

  //is there a way to set categories without infinite re-rendering?
  //how to include this code on useEffect?
  //how to avoid unnecesary rendering
  //how to avoid having to run getCategories over and over

  // console.log(categoriesSet);

  // return categoriesSet;
  // };







  //GET CATEGORIES, FOR LOOP SOLUTION WITH AN OBJECT

  const getCategories2 = () => {
    //create empty object
    let categoriesObj = {};

    //loop all products and get each products category
    //products is an array of objects, so can be looped

    for (let i = 0; i < products.length; i++) {
      //object.keys returns and array of all of an object's keys
      //if we pass that object as an argument
      //so we store this array returned, in a variable
      let categoriesObjKeys = Object.keys(categoriesObj);

      //use findIndex method to compare all the keys inside of the
      //categoriesObjKeys object, if the category already exists inside
      //of that object, the findIndex method should return that element
      //if not, then findIndex would return -1
      //so we store this value in a variable
      let findCategory = categoriesObjKeys.findIndex(
        (item) => item === products[i].category
      );

      //then we use a conditional to check if findIndex returned -1
      //for current category, if so, add current category to object
      //as a key value pair
      if (findCategory === -1) {
        categoriesObj[products[i].category] = products[i].category;
        // console.log(products[i].category);
      }
      //else do nothing
      // else {
      //   console.log("that products is repeated");
      // }
    }
    // console.log(categoriesObj);
    return categoriesObj;


    //GOALS:

    //1. loop all products and get each products category

    //2. on each iteration of each product, compare category with content
    //inside of object

    //3. if the product is already in the object, then do nothing and continue
    //looping, and if the product is not in the object, add it to the object
    //and continue looping
  };








  //USERS AGE CHECK
  const usersAgeCheck = () => {
    const arrayUnder25 = users.filter((item) => item.age > 25);
    // console.log(arrayUnder25);
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
        color="#2E6DFF"
        textToDisplay="Products"
        count={products.length}
      />

      {usersAgeCheck() && (
        <Widget
          key="2"
          color="#FF7A00"
          textToDisplay="Users"
          count={users.length}
        />
      )}

      {/* {getCategories() && ( */}
      {getCategories2() && (
        <Widget
          key="3"
          color="#378839"
          textToDisplay="Categories"
          count={Object.keys(getCategories2()).length}
          // count={getCategories().size}
        />
      )}

      <Widget key="4" color="yellow" textToDisplay="Alerts" count="" />
    </nav>
  );
};

export default WidgetWrapper;
