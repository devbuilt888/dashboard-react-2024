import react, { useContext } from "react";
import { ThemeContext } from "../../App";
import { StyledHeader, StyledUl, StyledCategory } from "./Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  const contextData = useContext(ThemeContext);

  return (
    <StyledHeader>
      <StyledUl>
        <StyledCategory>
          <Link to={`/`}> Chart-App</Link>
        </StyledCategory>
        <StyledCategory>
          <button
            onClick={() => {
              contextData.toggleDarkMode();
            }}
          >
            Mode: {contextData.isDarkMode ? "Dark " : "Light "}
          </button>
        </StyledCategory>
      </StyledUl>
    </StyledHeader>
  );
};

//remove css for header from app.js file
//create folder/file for styled components
//apply changes to styled components file
//change this component to a styled components one (pass props to styled comps if needed)
export default Header;
