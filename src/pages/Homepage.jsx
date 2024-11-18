import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";

const Homepage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Link to="/me">Go to profile page</Link>
    </div>
  );
};

export default Homepage;
