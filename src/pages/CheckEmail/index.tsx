import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "../../components";
import { checkEmailSchema } from "../../schema/formValidations/signup";
import { Icons } from "../../assets";

const CheckEmail = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormType>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(checkEmailSchema),
  });

  type FormType = z.infer<typeof checkEmailSchema>;

  const onSubmit = (/*values: FormType*/) => {};

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
          <Link
            className="flex items-center hover:opacity-70"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <p className="text-secondary-100 text-[1.3rem] md:text-base font-normal leading-[20.83px] ">
              Go Back
            </p>
            <img className="w-[18px] h-[18px] ml-4" src={Icons.RightArrow} />
          </Link>
        </span>
        <div className="md:min-h-[600px] xl:min-h-[870px] flex items-center">
          <div className="py-5 mt-14 md:mt-5 w-11/12 md:w-7/12 xl:w-10/12 mx-auto xl:mt-0 ">
            <h5 className="form-title mb-1 md:mb-2">
              Check your email for a code{" "}
            </h5>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col py-4 md:py-7 gap-3"
            >
              <Input
                error={errors.code}
                {...register("code")}
                label="Enter Code"
              />
              <Button
                disabled={!isValid}
                label="Continue"
                className="mt-2 md:mt-4"
              />
              <span className="text-[13px] md:text-sm font-normal leading-[18.23px] text-left text-secondary-100 mt-4">
                Didn't receive a code? Check your spam folder or{" "}
                <a href="#" className="underline">
                  click to resend
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
