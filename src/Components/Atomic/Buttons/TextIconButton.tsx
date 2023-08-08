import React from "react";

import { ReactComponent as LeftIcon } from "@Static/Icons/west_300_opsz24.svg";
import { ReactComponent as RightIcon } from "@Static/Icons/east_wght300_opsz24.svg";

type TextIconButtonProp = {
  disabled?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  children?: React.ReactNode;
};

const TextIconButton = ({
  disabled = false,
  leftIcon = false,
  rightIcon = false,
  children,
}: TextIconButtonProp) => {
  const iconStyle = "w-m24 aspect-square " + "tablet:w-t24 desktop:w-d24";

  const shapeStyle = "links text-black ";
  const layoutStyle =
    "relative flex flex-row place-content-center place-items-center w-fit gap-m4 " +
    "tablet:gap-t4 desktop:gap-d4 ";
  const beforeHoverStyle =
    "pointerhover:hover:before:content-[''] " +
    "pointerhover:hover:before:absolute " +
    "pointerhover:hover:before:left-0 " +
    "pointerhover:hover:before:bottom-0 " +
    "pointerhover:hover:before:w-full " +
    "pointerhover:hover:before:h-[0.31vw] " +
    "pointerhover:hover:before:bg-black " +
    "tablet:pointerhover:hover:before:h-[0.13vw] " +
    "desktop:pointerhover:hover:before:h-[0.06vw] ";
  const beforeActiveStyle =
    "active:before:content-[''] " +
    "active:before:absolute " +
    "active:before:left-0 " +
    "active:before:bottom-0 " +
    "active:before:w-full " +
    "active:before:h-[0.31vw] " +
    "active:before:bg-black " +
    "tablet:active:before:h-[0.13vw] " +
    "desktop:active:before:h-[0.06vw] ";
  const stateStyle =
    beforeHoverStyle +
    beforeActiveStyle +
    "disabled:text-gray disabled:pointerhover:hover:before:content-none " +
    "active:text-black active:pointerhover:hover:text-black " +
    "pointerhover:hover:text-gray ";

  const buttonStyle = shapeStyle + layoutStyle + stateStyle;

  return (
    <button disabled={disabled} className={buttonStyle}>
      {leftIcon && <LeftIcon className={iconStyle} />}
      {children}
      {rightIcon && <RightIcon className={iconStyle} />}
    </button>
  );
};

export default TextIconButton;
