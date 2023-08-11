import React, { useState } from "react";

import { ReactComponent as ArrowIcon } from "@Static/Icons/arrow_drop_down_FILL0_wght300_GRAD0_opsz24.svg";

type InputSelectProp = {
  disabled?: boolean;
  name?: string;
  options?: Array<{
    [index: number]: string;
    name: string;
    value: string;
  }>;
  onChange: (value: string) => void;
};

const InputSelect = ({ disabled, options, onChange }: InputSelectProp) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  const selectShape =
    "caption-bold border-m1 " +
    "tablet:border-t1 desktop:border-d1 " +
    (isOpened || selectedId !== -1 ? "border-black " : "border-lightgray ") +
    (selectedId === -1 ? "text-gray " : "text-black ") +
    (disabled ? "bg-extralight border-lightgray text-lightgray " : "");
  const selectLayout =
    "flex justify-between items-center px-m16 py-m12 " +
    "tablet:px-t16 desktop:px-d16 tablet:py-t16 desktop:py-d16 ";
  const selectState = "cursor-pointer ";
  const selectStyle = selectShape + selectLayout + selectState;

  const optionContainerShape = "w-full border border-black divide-y ";
  const optionContainerLayout =
    "absolute left-0 top-full mt-m8 " + "tablet:mt-t8 desktop:mt-d8 ";
  const optionContainerState = "";
  const optionContainerStyle =
    optionContainerShape + optionContainerLayout + optionContainerState;

  const optionShape = "caption-bold bg-white ";
  const optionLayout = "p-m16 " + "tablet:p-t16 desktop:p-d16 ";
  const optionState = "cursor-pointer ";
  const optionStyle = optionShape + optionLayout + optionState;

  const handleClick = () => {
    if (disabled) return;

    setIsOpened(!isOpened);
  };

  const handleOptionClick = (index: number) => {
    setSelectedId(index);
    setIsOpened(false);
    onChange(options[index].value);
  };

  return (
    <div className="relative w-full">
      <div className={selectStyle} onClick={handleClick}>
        <p>{selectedId === -1 ? "-Select-" : options[selectedId].name}</p>
        <ArrowIcon
          className={`h-m24 w-m24 ${
            disabled ? "fill-lightgray " : "fill-black "
          } tablet:h-t24 tablet:w-t24 desktop:h-d24 desktop:w-d24 ${
            isOpened ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpened && (
        <ul className={optionContainerStyle}>
          {options &&
            options.map(({ name, value }, index) => (
              <li
                key={value}
                className={
                  optionStyle +
                  (index === selectedId ? "bg-gray text-white" : "")
                }
                onClick={() => handleOptionClick(index)}
              >
                {name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
