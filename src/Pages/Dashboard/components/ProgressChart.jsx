import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ProgressChart = () => {
  const BarChartoptions = {
    responsive: "true",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  const BarChartdata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: false,
        data: [23, 89, 78, 54, 67, 100],
        borderColor: "skyblue",
        backgroundColor: "#6b46c1",
        categoryPercentage: 0.2,
        barThickness: "flex",
        barPercentage: 1,
      },
    ],
  };
  const LineChartoptions = {
    responsive: "true",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          display: true,
          min: 0,
          stepSize: 100,
          callback: function (value) {
            return value + " $";
          },
          color: "white",
        },
      },
    },
  };
  const LineChartdata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Earning",
        data: [200, 100, 400, 500, 320, 600],
        borderColor: "skyblue",
        backgroundColor: "#6b46c1",
      },
    ],
  };

  return (
    <div className="m-5">
      <div className="grid gap-5 md:grid-cols-12 justify-center">
        <div className="col-span-2 md:col-span-8">
          <div className="bg-[#1A1A4D] p-4 rounded shadow-md">
            <div className="my-3 px-5 font-sans">
              <div className="text-slate-500 text-[13px]">6 Month</div>
              <div className="text-2xl text-white ">Earning</div>
            </div>
            <Line options={LineChartoptions} data={LineChartdata} />
          </div>
        </div>
        <div className="col-span-2 md:col-span-4 rounded-md">
          <div className=" px-5 font-sans border-b-2 bg-slate-50 p-4">
            <div className="text-slate-500 text-[12px]">Last 6 Month</div>
            <div className="text-xl ">Total Orders</div>
          </div>
          <div className="bg-slate-50 rounded shadow-md p-4">
            <Bar options={BarChartoptions} data={BarChartdata} height={315} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
