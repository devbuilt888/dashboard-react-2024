import react from "react";
import { StyledChartContainer, StyledHeader } from "./ChartWrapper.styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ chartOneData }) => {
  const labels = ["10-19", "20-29", "30-39", "40-49", "50-59"];

  const data = {
    labels,
    datasets: [
      {
        label: "Real dataset",
        data: chartOneData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Fake dataset",
        data: [10, 20, 15, 5, 20],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <StyledChartContainer>
        <StyledHeader>Users by age group - Line Graph</StyledHeader>
        <Line data={data} />
      </StyledChartContainer>
    </>
  );
};

export default LineChart;
