import { Outlet } from "react-router-dom";
import { Icons, Images } from "../assets";

export default function AuthLayout(): React.ReactElement {
  return (
    <main className="flex min-h-screen">
      <div className="flex-1 border bg-cover bg-center w-full bg-[url('/authScreen.png')] px-5 py-2 hidden xl:block">
        <div className="max-w-[650px] ml-auto">
          <nav className="">
            <img alt="logo" className="xl:scale-75" src={Icons.Logo} />
          </nav>
          <div className="text-center py-10 mt-24">
            <img
              src={Images.AuthScreen}
              className="h-[327px] w-[427.62px] mx-auto"
              alt=""
            />
            <h5 className="text-[40px] font-medium leading-[52.08px] text-secondary-100 mt-5">
              Royalty collections,
              <br /> simplified. It's next level!
            </h5>
            <p className="text-[22px] font-normal leading-[28.64px] text-center">
              Revenue based invoice collection to
              <br /> make royalty collection as easy as...
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
