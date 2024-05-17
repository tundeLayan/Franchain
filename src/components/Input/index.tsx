import React from "react";
// import { FieldError } from "react-hook-form";
import cx from "classnames";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // error?: FieldError;
  label: string;
  error?: any;
}

const TextInput: React.FC<TextInputProps> = React.forwardRef<
  HTMLInputElement,
  Omit<TextInputProps, "ref">
>(({ error, className, name, label, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-[6.05px] md:gap-[10px]">
      {label && <p className="text-base md:text-base label">{label}</p>}
      <input
        className={cx(
          `appearance-none block w-full border h-[48px] 
          md:h-[56px] py-3 px-4 border-neutral-100 rounded-[6.05px] 
          md:rounded-xl focus:outline-none focus:ring-transparent 
          focus-visible:ring-transparent xs:h-[40.63px]`,
          className,
        )}
        ref={ref}
        name={name}
        {...rest}
      />

      {error && (
        <p className="text-error-100 text-[0.975rem] font-normal leading-[15.62px] mt-1 md:text-base">
          {error?.message}
        </p>
      )}
    </div>
  );
});

export default TextInput;
