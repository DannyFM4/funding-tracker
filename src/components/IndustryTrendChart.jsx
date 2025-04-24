import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const IndustryTrendChart = ({ data }) => {
  // Group funding data by industry and year
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.industry]) acc[item.industry] = {};
    acc[item.industry][item.year] = (acc[item.industry][item.year] || 0) + item.amount;
    return acc;
  }, {});

  const years = [...new Set(data.map((item) => item.year))].sort();
  const datasets = Object.keys(groupedData).map((industry) => ({
    label: industry,
    data: years.map((year) => groupedData[industry][year] || 0),
    fill: false,
    borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }));

  const chartData = {
    labels: years,
    datasets,
  };

  return <Line data={chartData} />;
};

export default IndustryTrendChart;