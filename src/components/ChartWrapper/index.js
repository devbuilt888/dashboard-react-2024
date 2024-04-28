import react, { useEffect, useState } from "react";
import { StyledChartWrapper, StyledHeader } from "./ChartWrapper.styled";
import React from "react";
import axios from "axios";

import LineChart from "./LineChart";
import DonutChart from "./DonutChart";

const ChartWrapper = () => {
  const [users, setUsers] = useState([]);
  const [chartOneData, setChartOneData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersResponse = await axios.get(`https://dummyjson.com/users`);
      const userArr = usersResponse.data.users;
      setUsers(userArr);
      // console.log(userArr);

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
      <LineChart chartOneData={chartOneData} />
      <DonutChart donutData={chartOneData} />
    </StyledChartWrapper>
  );
};

export default ChartWrapper;
