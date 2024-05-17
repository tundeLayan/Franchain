import React, { ReactElement } from "react";

import { Loader } from "../index";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactElement;
  variant?: "primary" | "neutral" | "tertiary" | "error" | "success";
  icon?: string;
  iconAfter?: string;
  loading?: boolean;
}

const variants = {
  primary:
    "bg-primary-100 border-primary-100 hover:border-primary-100 text-white",
  neutral: "",
  tertiary: "",
  error: "",
  success: "",
};

const Button: React.FC<ButtonProps> = ({
  label,
  className = "",
  variant = "primary",
  icon,
  iconAfter,
  loading,
  type = "submit",
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={loading || disabled}
      type={type}
      className={`h-fit w-fit rounded-[60px] items-center justify-center px-[40px] py-[10px] md:px-10 md:py-[15px] text-xl md:text-lg font-bold leading-[23.44px] hover:opacity-70 ${
        loading ? "cursor-progress opacity-85" : ""
      } ${disabled ? "cursor-not-allowed border-neutral-500 bg-neutral-150 opacity-70 bg-primary-150" : ""} ${variants[variant]} ${className} ${
        icon || iconAfter || loading ? "flex gap-2" : ""
      }`}
      {...props}
    >
      {loading ? <Loader /> : null}
      {icon ? <img alt="" src={icon} className="py-1" /> : null}
      {label}
      {iconAfter ? <img alt="" src={iconAfter} /> : null}
    </button>
  );
};

export default Button;
