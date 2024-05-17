import { Link, useNavigate } from "react-router-dom";
import { Icons } from "../../assets";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-bgColor-100 py-4">
      <div className="2xl:max-w-[650px] flex flex-col">
        <span className="flex justify-between xl:justify-end px-5 text-base font-normal leading-[20.83px]">
          <img
            alt="logo"
            className="hidden md:inline-block xl:hidden"
            src={Icons.Logo}
          />
          <img
            alt="logo"
            className="inline-block md:hidden"
            src={Icons.LogoSmall}
          />
          <div
            className="flex items-center hover:opacity-70"
            role="link"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <p className="text-secondary-100 text-[1.3rem] md:text-base font-normal leading-[20.83px] ">
              Go back
            </p>
            <img className="w-[18px] h-[18px] ml-4" src={Icons.RightArrow} />
          </div>
        </span>
        <div className="md:min-h-[600px] xl:min-h-[870px] flex items-center">
          <div className="py-5 mt-14 md:mt-5 w-11/12 md:w-7/12 xl:w-10/12 mx-auto xl:mt-0 ">
            <h5 className="form-title mb-1 md:mb-2">Check your email</h5>
            <p className="form-subtitle">
              Thanks! If {`{email}`} matches an email address we have on file,
              then we've sent you an email containing further instructions for
              resetting your password.
              <br className="" /> <br className="" /> If you haven't received an
              email in 5 minutes, check your spam{" "}
              <Link className="text-primary-100" to="">
                resend
              </Link>{" "}
              or{" "}
              <Link className="text-primary-100" to="">
                try a different email address
              </Link>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
