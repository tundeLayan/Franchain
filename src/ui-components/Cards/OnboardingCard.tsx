import { memo } from "react";

import { Checkbox } from "@/components";
import cx from "classnames";

interface IProps {
  id: number | string;
  isChecked: boolean;
  icon: string;
  label: string;
  handleSelected: (id: string | number) => void;
}

const OnboardingCard = ({
  id,
  isChecked,
  icon,
  label,
  handleSelected,
}: IProps) => {
  return (
    <div
      className={cx("onboarding-card", {
        "!border-primary-100": isChecked,
      })}
    >
      <img
        alt=""
        className="w-[65px] h-[65px]  xl:w-[78px] xl:h-[78px]"
        src={icon}
      />
      <p className="text-secondary-100 text-xl font-bold leading-[26.04px]">
        {label}
      </p>
      <Checkbox
        checked={isChecked}
        onCheckedChange={() => handleSelected(id)}
        className="data-[state=checked]:bg-primary-100 border-[0.82px] data-[state=checked]:border-primary-100 w-[23.91px] h-[23.91px]"
      />
    </div>
  );
};

export default memo(OnboardingCard);
