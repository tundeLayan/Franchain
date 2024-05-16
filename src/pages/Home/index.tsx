import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="">
        <Link className="text-blue-500" to="/auth/register">
          Register Link
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
