import React from "react";

import { ReactComponent as CheckIcon } from "@Static/Icons/check_FILL0_wght300_GRAD0_opsz24.svg";

type CheckboxProp = {
  active?: boolean;
  text: string;
  selected?: boolean;
};

const Checkbox = ({ text, active = true, selected = true }: CheckboxProp) => {
  const checkboxShapeStyle =
    "appearance-none bg-lightgray border border-black ";
  const checkboxLayoutStyle =
    "peer aspect-square " + "w-m24 h-m24 " + "tablet:w-t24 desktop:w-d24 ";
  const checkboxStateStyle =
    "disabled:border-darkgray " +
    `checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuNTUxNTYgMTcuNjQ5Nkw0LjIyNjU2IDEyLjMyNDZMNS4yNzY1NiAxMS4yNDk2TDkuNTUxNTYgMTUuNTI0NkwxOC43MjY2IDYuMzQ5NjFMMTkuNzc2NiA3LjQyNDYxTDkuNTUxNTYgMTcuNjQ5NloiLz48L3N2Zz4NCg==')] ` +
    "checked:bg-[length:100%_100%] " +
    (!active && selected
      ? "checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05LjU1MTU2IDE3LjY0OTZMNC4yMjY1NiAxMi4zMjQ2TDUuMjc2NTYgMTEuMjQ5Nkw5LjU1MTU2IDE1LjUyNDZMMTguNzI2NiA2LjM0OTYxTDE5Ljc3NjYgNy40MjQ2MUw5LjU1MTU2IDE3LjY0OTZaIiBmaWxsPSIjODA4MDgwIi8+Cjwvc3ZnPg==')] "
      : "");

  const checkboxStyle =
    checkboxShapeStyle + checkboxLayoutStyle + checkboxStateStyle;

  return (
    <>
      <label
        className="flex w-fit flex-row gap-m12 tablet:gap-t12 desktop:gap-d12"
        htmlFor={text}
      >
        <input
          disabled={!active}
          className={checkboxStyle}
          defaultChecked={selected}
          type="checkbox"
          id={text}
          name={text}
        />
        <p className="caption peer-disabled:text-gray">{text}</p>
      </label>
    </>
  );
};

export default Checkbox;
