import react from "react";
import Header from "../Header";
import WidgetWrapper from "../WidgetWrapper";
import ChartWrapper from "../ChartWrapper";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <WidgetWrapper />
      <ChartWrapper />
      <Footer />
    </div>
  );
};

export default Home;
