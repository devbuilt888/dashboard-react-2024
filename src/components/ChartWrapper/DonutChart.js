import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  DonutChartWrap,
  StyledChartContainer,
  StyledHeader,
} from "./ChartWrapper.styled";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ donutData }) => {
  const labels = ["10-19", "20-29", "30-39", "40-49", "50-59"];

  const data = {
    //labels can come from parent component
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: donutData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <StyledChartContainer className="chartWrapper">
      <StyledHeader>Users by age group - Donut Graph</StyledHeader>
      <div>hellow</div>
      <DonutChartWrap>
        <Doughnut data={data} labels={labels} />
      </DonutChartWrap>
    </StyledChartContainer>
  );
};

export default DonutChart;
