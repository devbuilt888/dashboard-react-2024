import react from "react";
import Widget from "./Widget";

const WidgetWrapper = () => {
  let getWidget = () => {
    let newArr = [];
    for (let i = 0; i < 4; i++) {
      newArr.push(<Widget />);
    }
    return newArr;
  };
  return <nav className="widgetWrapper widgetGridContainer">{getWidget()}<Widget color="green"/><Widget color="#00f" /><Widget color="rgb(200, 100, 100)" /><Widget color="yellow"/></nav>;

};

export default WidgetWrapper;
