import react from "react";
import Header from "../Header";
import WidgetWrapper from "../WidgetWrapper";
import ChartWrapper from "../ChartWrapper";
import Footer from "../Footer";
import { StyledHtmlTable } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <Header />
      <WidgetWrapper />
      <ChartWrapper />
      <Footer />
    </div>
  );
};

export default Home;
