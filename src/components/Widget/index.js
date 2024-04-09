import react from "react";
import { Link } from "react-router-dom";
import {StyledWidget} from './Widget.styled';

const Widget = ({ color, textToDisplay, count, link }) => {
  //array destructuring
  // const array1 = [1, 2, 3];
  // const [one, two] = array1; (only 1 and 2 will be assigned to one and two respectively)

  // const object = { orange: 'orange', mango:'mango', apple:'apple'};
  // const {orange, , apple};
  //leave blank space between commas to skip one key from object to be destructured

  const widgetStyles = {
    background: color,
  };
  return (
    <StyledWidget className="widget" style={widgetStyles}>
      <i className="fa-solid fa-bucket" />
      <Link to={link}>{textToDisplay}</Link>
      <br />
      {count}
    </StyledWidget>
  );
};

export default Widget;
