import React from "react";

import cx from "classnames";
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";

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
  customLabels: any;
  countries: any;
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
  customLabels,
  countries,
  ...rest
}: IProps<T>) => {
  return (
    <div
      className={cx(
        { [`${containerClass}`]: containerClass },
        "flex flex-col gap-1 ",
      )}
    >
      <label
        className={"text-[0.975rem] flex-[8] md:text-base"}
        htmlFor={rest.id}
      >
        {label} {required && <span className="text-danger-600">*</span>}
      </label>
      <div className="flex relative bg-white">
        <input
          className={cx(
            `flex-[10] appearance-none block w-full border h-[33.86px] 
          md:h-[56px] py-3 px-4 border-neutral-100 rounded-[6.05px] 
          md:rounded-xl focus:outline-none focus:ring-transparent 
          focus-visible:ring-transparent xs:h-[40.63px] !rounded-tr-none !rounded-br-none`,
          )}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <ReactFlagsSelect
          selected={dropdownValue}
          className={`
          appearance-none flex-[2] block w-full h-full rounded-[6.05px] 
          md:rounded-xl focus:outline-none focus:ring-transparent 
          focus-visible:ring-transparent xs:h-[40.63px] !rounded-tl-none !rounded-bl-none`}
          onSelect={onDropdownChange}
          showSecondarySelectedLabel={false}
          showOptionLabel={false}
          customLabels={customLabels}
          countries={countries}
        />
      </div>
    </div>
  );
};

export default SelectComponent;
