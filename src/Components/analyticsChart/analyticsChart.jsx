import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const analyticsChart = ({ data, labels }) => {
  const diagramData = {
    labels: labels,
    datasets: [
      {
        label: "Analytics",
        data: data,
        backgroundColor: [
          "rgb(14, 188, 48)",
          "rgb(210, 51, 51)",
          "rgb(255, 205, 86)",
          "rgb(255,192,203)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={diagramData} />
    </div>
  );
};

export default analyticsChart;
