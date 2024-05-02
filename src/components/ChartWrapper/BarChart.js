import react from "react";

import { StyledChartContainer, StyledHeader } from "./ChartWrapper.styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
      // },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random()),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random()),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <StyledChartContainer>
      <StyledHeader>Random data - Bar Graph</StyledHeader>

      <Bar options={options} data={data} />
    </StyledChartContainer>
  );
};

export default BarChart;
