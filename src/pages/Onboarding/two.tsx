import { useNavigate } from "react-router-dom";

import { Images } from "../../assets";
import { Button } from "@/components";

const Onboarding2 = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 pb-10 md:py-20">
      <div className="flex flex-col xl:flex-row xl:gap-[6.3125rem] items-center mb-[60px] px-4">
        <div className="flex-[5] mb-[30px] md:mb-[60px] xl:mb-0">
          <h5 className="mb-[10px] md:mb-[26px] text-base md:text-3xl md:font-medium md:leading-[45.57px] text-secondary-100 !text-center xl:!text-left">
            Franchain has helped us collect royalties locally and
            internationally in a way we never thought was possible
          </h5>
          <Button
            label="Continue"
            className="mx-auto !md:w-fit mt-2 md:mt-4 hidden xl:inline-block"
            onClick={() => navigate("/onboarding/two")}
          />
        </div>
        <div className="flex-[3]">
          <div className="relative w-[55%] mx-auto md:w-full">
            <img src={Images.LadySmiling} alt="" className="md:w-full h-auto" />
            <div className="absolute left-[11.71px] bottom-[7.17px] md:bottom-[15.35px] md:left-[23.43px]">
              <p className="text-white font-medium text-[0.61rem] leading-[0.7944rem] md:text-[1.2206rem] md:leading-[1.5888rem]">
                Alexandra Miller
              </p>
              <p className="text-white font-bold text-[0.61rem] leading-[0.7944rem] md:text-[1.2206rem] md:leading-[1.5888rem]">
                Founder @ EL&N London
              </p>
            </div>
          </div>
        </div>
        <div className="inline-block xl:hidden mt-[40px] md:mt-[68.91px]">
          <Button
            label="Continue"
            className="mx-auto !md:w-fit mt-2 md:mt-4 "
            onClick={() => navigate("/onboarding/two")}
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding2;
