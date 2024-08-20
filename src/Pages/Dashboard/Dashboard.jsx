import DetailsCards from "./components/DetailsCards";
import CategoryCards from "./components/CategoryCards";
import ProgressChart from "./components/ProgressChart";
import BookingList from "./components/BookingList";
const Dashboard = () => {
  return (
    <div>
      <DetailsCards />
      <ProgressChart />
      <BookingList />
      <CategoryCards />
    </div>
  );
};

export default Dashboard;
