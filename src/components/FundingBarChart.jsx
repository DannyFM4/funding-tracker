import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const FundingBarChart = ({ data }) => {
  // Calculate total funding by year
  const fundingByYear = data.reduce((acc, item) => {
    acc[item.year] = (acc[item.year] || 0) + item.amount;
    return acc;
  }, {});

  const years = Object.keys(fundingByYear);
  const fundingAmounts = Object.values(fundingByYear);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Total Funding by Year',
        data: fundingAmounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default FundingBarChart;