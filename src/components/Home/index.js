import react from "react";
import Header from "../Header";
import WidgetWrapper from "../WidgetWrapper";
import ChartWrapper from "../ChartWrapper";
import Footer from "../Footer";

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <WidgetWrapper />
      <ChartWrapper />
      <Footer />
    </div>
  );
};

export default Home;
