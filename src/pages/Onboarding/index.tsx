import { useState } from "react";

import { Icons } from "../../assets";
import { Button, Checkbox } from "@/components";
import { OnboardingCard } from "@/ui-components";

const Items = [
  {
    icon: Icons.Onboarding,
    label: "Reduce failed payments",
    id: 1,
    isChecked: true,
  },
  {
    icon: Icons.Onboarding,
    label: "Reduce failed payments",
    id: 2,
    isChecked: false,
  },
  {
    icon: Icons.Onboarding,
    label: "Reduce failed payments",
    id: 3,
    isChecked: false,
  },
  {
    icon: Icons.Onboarding,
    label: "Reduce failed payments",
    id: 4,
    isChecked: true,
  },
  {
    icon: Icons.Onboarding,
    label: "Reduce failed payments",
    id: 5,
    isChecked: true,
  },
  {
    icon: Icons.Onboarding,
    label: "Reduce failed payments",
    id: 6,
    isChecked: false,
  },
];

const Onboarding = () => {
  const [goals, setGoals] = useState(Items);

  const handleSelected = (id: number | string) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id === id) {
          return { ...goal, isChecked: !goal.isChecked };
        }
        return { ...goal };
      }),
    );
  };

  const isDisabled = () =>
    goals.filter((goal) => goal.isChecked !== false).length === 0;

  return (
    <div className="py-16">
      <div className="flex flex-col items-center mb-[60px] px-4">
        <h5 className="form-title mb-[10px] md:mb-2 !text-center">
          What's your goal with Franchain?
        </h5>
        <p className="form-subtitle !text-center">
          No wrong answers here. And it doesn’t matter if you change your mind
          later.
        </p>
      </div>
      {/* desktop and Ipad */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[34.5px] gap-y-[45.5px] mt-16">
        {goals.map(({ id, label, icon, isChecked }) => {
          return (
            <OnboardingCard
              key={id}
              {...{ isChecked, label, icon, id }}
              handleSelected={handleSelected}
            />
          );
        })}
      </div>
      {/* mobile */}
      <div className="flex flex-col md:hidden">
        {goals.map(({ id, label, isChecked }) => {
          return (
            <div key={id} className="flex justify-between border-b p-5">
              <p className="text-base font-medium leading-[20.83px]">{label}</p>
              <Checkbox
                checked={isChecked}
                className="data-[state=checked]:bg-primary-100 border-[0.82px] data-[state=checked]:border-primary-100 w-[23.91px] h-[23.91px]"
                onCheckedChange={() => handleSelected(id)}
              />
            </div>
          );
        })}
      </div>
      <div className="hidden md:flex justify-center md:mt-[72px]">
        <Button
          label="Continue"
          className="mx-auto !md:w-fit mt-2 md:mt-4 "
          disabled={isDisabled()}
        />
      </div>
    </div>
  );
};

export default Onboarding;
