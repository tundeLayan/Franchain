import React from "react";

import cx from "classnames";
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from "react-hook-form";

import { Icons } from "../../assets";

interface IProps<T extends string> {
  label: string;
  containerClass?: string;
  id: string;
  options?: { [key: string]: string }[];
  field?: ControllerRenderProps<FieldValues, T>;
  error?: FieldError;
  isClearable?: boolean;
  isMulti?: boolean;
  isLoading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onInputChange: (val: any) => void;
  onDropdownChange: (val: any) => void;
  dropdownValue: string;
  inputValue: string;
  required?: boolean;
}
const SelectComponent: React.FC<any> = <T extends string>({
  label,
  containerClass,
  options = [],
  value,
  onInputChange,
  onDropdownChange,
  inputValue,
  dropdownValue,
  isLoading = false,
  required = false,
  error,
  ...rest
}: IProps<T>) => {
  return (
    <div
      className={cx(
        { [`${containerClass}`]: containerClass },
        "flex flex-col gap-1",
      )}
    >
      <label className={"text-[0.975rem] md:text-base"} htmlFor={rest.id}>
        {label} {required && <span className="text-danger-600">*</span>}
      </label>
      <div className="flex relative">
        <input
          className={cx(
            `flex-[7] appearance-none block w-full border h-[33.86px] 
          md:h-[56px] py-3 px-4 border-neutral-100 rounded-[6.05px] 
          md:rounded-xl focus:outline-none focus:ring-transparent 
          focus-visible:ring-transparent xs:h-[40.63px] !rounded-tr-none !rounded-br-none`,
          )}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <select
          className={`flex-[2] md:flex-[1] appearance-none block w-full border h-[33.86px] 
          md:h-[56px] py-1 px-2 md:py-3 md:px-4 border-neutral-100 rounded-[6.05px] 
          md:rounded-xl focus:outline-none focus:ring-transparent 
          focus-visible:ring-transparent xs:h-[40.63px] !rounded-tl-none !rounded-bl-none`}
          onChange={(e) => onDropdownChange(e.target.value)}
          value={dropdownValue}
        >
          {options.map(({ value, label }) => (
            <option className="text-[1.3rem] md:text-base" value={value}>
              {label}
            </option>
          ))}
        </select>
        <img
          className="absolute w-[15px] h-[15px] md:w-[25px] md:h-[25px] right-[4px] bottom-[14px]"
          alt="icon"
          src={Icons.Dropdown}
        />
      </div>
    </div>
  );
};

export default SelectComponent;
