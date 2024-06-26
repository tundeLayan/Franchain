import React from "react";
// import { FieldError } from "react-hook-form";
import cx from "classnames";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // error?: FieldError;
  label: string;
  error?: any;
  containerClassName?: string;
}

const TextInput: React.FC<TextInputProps> = React.forwardRef<
  HTMLInputElement,
  Omit<TextInputProps, "ref">
>(({ error, className, name, label, containerClassName, ...rest }, ref) => {
  return (
    <div
      className={cx(`flex flex-col gap-[6.05px] md:gap-[10px]`, {
        [`${containerClassName}`]: containerClassName,
      })}
    >
      {label && <p className="text-base md:text-base label">{label}</p>}
      <input
        className={cx(
          `appearance-none block w-full border h-[48px] 
          md:h-[56px] py-3 px-4 border-neutral-100 rounded-[6.05px] 
          md:rounded-xl focus:outline-none focus:ring-transparent 
          focus-visible:ring-transparent xs:h-[40.63px] text-base md:text-lg lg:text-xl`,
          className,
        )}
        ref={ref}
        name={name}
        {...rest}
      />

      {error && (
        <p className="text-error-100 text-[0.625rem] font-normal leading-[15.62px] mt-1 md:text-base">
          {error?.message || error}
        </p>
      )}
    </div>
  );
});

export default TextInput;
