import { useMemo } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input, Button, Select } from "../../components";
import { editProviderSchema } from "../../schema/formValidations/signup";
import { Icons } from "../../assets";
import { countries } from "../../utils/countries";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<FormType>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(editProviderSchema),
  });

  function compare(a: any, b: any) {
    if (a.fullName < b.fullName) {
      return -1;
    }
    if (a.fullName > b.fullName) {
      return 1;
    }
    return 0;
  }
  const countriesMemoized = useMemo(
    () =>
      countries
        .map((country) => ({
          value: country?.cca2,
          label: `${country.flag}  ${country.cca2}`,
          fullName: country.name.common,
        }))
        .sort(compare),
    [],
  );

  type FormType = z.infer<typeof editProviderSchema>;

  const onSubmit = (/*values: FormType*/) => {};

  return (
    <div className="flex-1 flex flex-col bg-bgColor-100 py-4">
      <div className="2xl:max-w-[650px] mr-auto">
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
          <Link className="flex items-center hover:opacity-70" to="/register">
            <p className="text-secondary-100 text-[1.3rem] md:text-base font-normal leading-[20.83px] ">
              Log in
            </p>
            <img className="w-[18px] h-[18px] ml-4" src={Icons.RightArrow} />
          </Link>
        </span>
        <div className="py-5 mt-6 md:mt-14 w-11/12 md:w-7/12 xl:w-10/12 mx-auto xl:mt-0">
          <h5 className="form-title mb-1 md:mb-2">
            Get started with Franchain{" "}
          </h5>
          <p className="form-subtitle">Create an account in 5 minutes.</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col py-4 md:py-7 gap-3"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                error={errors.firstName}
                {...register("firstName")}
                label="First name"
              />
              <Input
                error={errors.lastName}
                {...register("lastName")}
                label="Last name"
              />
            </div>

            <Select
              label="Business name and HQ location"
              onInputChange={(val: string) => setValue("businessName", val)}
              onDropdownChange={(val: string) => setValue("hqLocation", val)}
              options={countriesMemoized || []}
              dropdownValue={watch("hqLocation")}
              inputValue={watch("businessName")}
              id="businessName"
            />

            <Input
              error={errors.workEmail}
              {...register("workEmail")}
              label="Work email"
            />
            <Input
              error={errors.password}
              {...register("password")}
              type="password"
              label="Password"
            />
            <Button
              disabled={!isValid}
              label="Sign Up"
              className="mt-2 md:mt-4"
            />

            {/* TODO: Move to a constant file */}
            <span className="text-[13px] md:text-sm font-normal leading-[18.23px] text-left text-secondary-100">
              By clicking “Start Application“, I agree to Mercury's{" "}
              <a className="underline" href="#">
                Terms of Use
              </a>
              ,{" "}
              <a href="#" className="underline">
                Privacy
                <br className="hidden" /> Policy
              </a>{" "}
              and to receive electronic communication about my accounts and
              services <br className="hidden" /> per{" "}
              <a href="#" className="underline">
                Mercury's Electronic Communications Agreement
              </a>
              , and acknowledge receipt
              <br className="hidden" /> of{" "}
              <a href="#" className="underline">
                Mercury's USA PATRIOT Act disclosure
              </a>
              .
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
