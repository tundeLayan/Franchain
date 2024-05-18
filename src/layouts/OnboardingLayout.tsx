import { Link, Outlet } from "react-router-dom";

import { Icons } from "../assets";
import { COMPANY_DATA } from "../constants/companyData";

const OnBoardingLayout = () => {
  return (
    <main className="min-h-screen max-w-[1300px] mx-auto">
      <nav className="flex justify-between px-5 md:py-5 md:px-10 xl:px-2">
        <img
          alt="logo"
          className="scale-50 md:scale-100 xl:scale-75"
          src={Icons.Logo}
        />
        <Link className="flex items-center hover:opacity-70" to="/auth/login">
          <p className="text-secondary-100 text-[1.3rem] md:text-base font-normal leading-[20.83px] ">
            Skip to dashboard
          </p>
          <img className="w-[18px] h-[18px] ml-4" src={Icons.RightArrow} />
        </Link>
      </nav>
      <section className="min-h-[calc(100vh-10rem)] md:px-[6.8125rem] xl:px-2">
        <Outlet />
      </section>
      <footer className="px-2">
        <p className="font-normal text-sm md:text-lg leading-[23.44px] mb-[35px]">
          {COMPANY_DATA.name} is a financial technology company, not a bank.
          Banking services are provided by trusted regulated banking partners
          including but not limited to JP Morgan, Barclays and Credit Suisse.
        </p>
        <div className="hidden md:flex gap-x-[23px] gap-y-[30.52px] md:gap-[66.1px] mb-[48px] flex-wrap">
          <Link className="text-[18px] font-bold leading-[23.44px]" to="#">
            Need help?
          </Link>
          <Link className="text-[18px] font-bold leading-[23.44px]" to="#">
            Back to dashboard
          </Link>
          <Link className="text-[18px] font-bold leading-[23.44px]" to="#">
            Terms
          </Link>
          <Link className="text-[18px] font-bold leading-[23.44px]" to="#">
            Privacy policy
          </Link>
          <Link className="text-[18px] font-bold leading-[23.44px]" to="#">
            Sign out and continue later
          </Link>
        </div>
        <div className="flex md:hidden gap-x-[23px] gap-y-[25.52px] md:gap-[66.1px] mb-[48px] flex-wrap">
          <Link
            className="text-sm md:text-[18px] font-bold leading-[23.44px]"
            to="#"
          >
            Terms
          </Link>
          <Link
            className="text-sm md:text-[18px] font-bold leading-[23.44px]"
            to="#"
          >
            Privacy policy
          </Link>
          <Link
            className="text-sm md:text-[18px] font-bold leading-[23.44px]"
            to="#"
          >
            Need help?
          </Link>
          <Link
            className="text-sm md:text-[18px] font-bold leading-[23.44px]"
            to="#"
          >
            Sign out and continue later
          </Link>
          <Link
            className="text-sm md:text-[18px] font-bold leading-[23.44px]"
            to="#"
          >
            Back to dashboard
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default OnBoardingLayout;
