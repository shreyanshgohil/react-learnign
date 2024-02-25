import AddCoustomer from "../components/AddCoustomer";
import ChangeBalance from "../components/ChangeBalance";
import Display from "../components/Display";

const HomePage = () => {
  return (
    <div>
      <Display />
      <AddCoustomer />
      <ChangeBalance />
    </div>
  );
};

export default HomePage;
