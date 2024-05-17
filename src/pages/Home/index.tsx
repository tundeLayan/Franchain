import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="">
        <Link className="text-blue-500" to="/auth/register">
          Register Link
        </Link>
        <Link className="text-blue-500" to="/auth/check-email">
          Check Email
        </Link>
        <Link className="text-blue-500" to="/auth/login">
          Login
        </Link>
        <Link className="text-blue-500" to="/auth/reset-password">
          Reset Password
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
