import React, { ChangeEvent, useContext, useEffect } from "react";
import RadioContext from "./RadioContext";

type RadioButtonProp = {
  id: string;
  name: string;
  value: string;
  children?: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
};

const RadioButton = ({
  id,
  name,
  value,
  children,
  defaultChecked,
  disabled = false,
}: RadioButtonProp) => {
  const group = useContext(RadioContext);

  const radioShape =
    "peer appearance-none rounded-full border-m1 border-black bg-lightgray " +
    "tablet:border-t1 desktop:border-d1 ";

  const radioLayout =
    "grid place-content-center aspect-square w-m24 min-w-m24 h-m24 min-h-m24 " +
    "tablet:w-t24 tablet:h-t24 tablet:min-w-t24 tablet:min-h-t24 " +
    "desktop:w-d24 desktop:h-d24 desktop:min-w-d24 desktop:min-h-d24 ";

  const radioBefore =
    "before:content-[''] " +
    "before:block " +
    "before:w-m14 " +
    "tablet:before:w-t14 desktop:before:w-d14 " +
    "before:h-m14 " +
    "tablet:before:h-t14 desktop:before:h-d14 " +
    "before:rounded-full " +
    "before:bg-black " +
    "before:hidden ";

  const radioState =
    radioBefore +
    "checked:before:block " +
    "disabled:border-gray disabled:before:bg-gray";

  const radioStyle = radioShape + radioLayout + radioState;

  useEffect(() => {
    if (defaultChecked && group.onChange) {
      group.onChange(value);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (group.onChange) {
      group.onChange(e.target.value);
    }
  };

  return (
    <label
      className="flex w-fit flex-row items-center gap-m12 tablet:gap-t12 desktop:gap-d12"
      htmlFor={id}
    >
      <input
        id={id}
        className={radioStyle}
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked || false}
        disabled={disabled || group.disabled}
        checked={group.value && group.value}
        onChange={handleChange}
      />
      <span className="caption peer-disabled:text-gray">{children}</span>
    </label>
  );
};

export default RadioButton;
