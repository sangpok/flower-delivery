import React from "react";

import { ReactComponent as CorrectIcon } from "@Static/Icons/Correct.svg";
import { ReactComponent as ErrorIcon } from "@Static/Icons/error-warning.svg";

type InputTextProp = {
  label?: string;
  textHelper?: string;
  placeholder?: string;
  disabled?: boolean;
  state?: "default" | "error" | "success";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText = ({
  label,
  textHelper,
  placeholder,
  disabled,
  state = "default",
  value,
  onChange,
}: InputTextProp) => {
  const inputShape =
    "caption-bold border-m1 apperance-none outline-none text-black " +
    "tablet:border-t1 desktop:border-d1 " +
    (state === "default" && value === ""
      ? "border-lightgray "
      : "border-black ") +
    (state === "error"
      ? "border-error text-error placeholder:text-error "
      : "") +
    (state === "success"
      ? "border-success text-success placeholder:text-success "
      : "");

  const inputLayout =
    "w-full px-m16 py-m12 mb-m8 " +
    "tablet:p-t16 tablet:mb-t8 desktop:p-d16 desktop:mb-d8 ";

  const inputState =
    "disabled:bg-extralight disabled:placeholder:text-lightgray " +
    (value === "" && state === "default"
      ? "pointerhover:hover:border-gray disabled:pointerhover:hover:border-lightgray "
      : "");
  // + "focus-within:shadow-[0px_0px_2px_2px_#0D69D4] ";
  const inputStyle = inputShape + inputLayout + inputState;

  return (
    <label className="w-full">
      <p className="heading6 mb-m12 tablet:mb-t12 desktop:mb-d12">{label}</p>
      <input
        className={inputStyle}
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {state === "default" && (
        <p className="caption-small text-gray">{textHelper}</p>
      )}

      {state === "error" && (
        <p className="caption-small flex items-center text-error">
          <ErrorIcon className="inline-block h-m16 w-m16 fill-error tablet:h-t16 tablet:w-t16 desktop:h-d16 desktop:w-d16" />
          {textHelper}
        </p>
      )}

      {state === "success" && (
        <p className="caption-small text-success">
          <CorrectIcon className="fill-succeess inline-block h-m16 w-m16 tablet:h-t16 tablet:w-t16 desktop:h-d16 desktop:w-d16" />
          {textHelper}
        </p>
      )}
    </label>
  );
};

export default InputText;
