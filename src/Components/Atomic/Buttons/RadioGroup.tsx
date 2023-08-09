import React from "react";
import RadioContext from "./RadioContext";

type RadioGroupProp = {
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
  value?: boolean;
  onChange?: (value: string) => void;
};

const RadioGroup = ({ label, children, ...rest }: RadioGroupProp) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </fieldset>
  );
};

export default RadioGroup;
