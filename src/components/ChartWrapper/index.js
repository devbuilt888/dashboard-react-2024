import react, { useEffect, useState } from "react";
import {
  StyledChartWrapper,
  StyledChartContainer,
} from "./ChartWrapper.styled";
import React from "react";
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
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartWrapper = () => {
  const [users, setUsers] = useState([]);
  const [chartOneData, setChartOneData] = useState([]);
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
        label: "Real dataset",
        data: chartOneData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Fake dataset",
      //   data: [10, 20, 15, 5, 20],
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersResponse = await axios.get(`https://dummyjson.com/users`);
      const userArr = usersResponse.data.users;

      const finalArr = [0, 0, 0, 0, 0];
      for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].age >= 10 && userArr[i].age <= 19) {
          finalArr[0] += 1;
        } else if (userArr[i].age >= 20 && userArr[i].age <= 29) {
          finalArr[1] += 1;
        } else if (userArr[i].age >= 30 && userArr[i].age <= 39) {
          finalArr[2] += 1;
        } else if (userArr[i].age >= 40 && userArr[i].age <= 49) {
          finalArr[3] += 1;
        } else if (userArr[i].age >= 50 && userArr[i].age <= 59) {
          finalArr[4] += 1;
        }
      }
      setChartOneData(finalArr);
    };
    fetchUsers();
  }, []);

  return (
    <StyledChartWrapper className="chartWrapper">
      <Line data={data} />
      <StyledChartContainer>
        <div>chart</div>
      </StyledChartContainer>
    </StyledChartWrapper>
  );
};

export default ChartWrapper;
