import React from "react";

import { ReactComponent as LeftIcon } from "@Static/Icons/west_300_opsz24.svg";
import { ReactComponent as RightIcon } from "@Static/Icons/east_wght300_opsz24.svg";

type ButtonProp = {
  type?: "primary" | "secondary" | "tertiary";
  rightIcon?: boolean;
  leftIcon?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({
  type = "primary",
  rightIcon = false,
  leftIcon = false,
  disabled = false,
  children,
}: ButtonProp) => {
  /** Type별 Flag */
  const isPrimary = type === "primary";
  const isSecondary = type === "secondary";
  const isTertiary = type === "tertiary";

  let buttonStyle = "";
  let iconStyle = "";

  if (isPrimary) {
    const primaryShapeStyle = "bg-black border-none text-white ";
    const primaryLayoutStyle =
      "group button flex w-full place-content-center place-items-center " +
      "gap-m8 px-m24 pb-m14 pt-m16 " +
      "tablet:gap-t8 tablet:px-t24 tablet:pb-t14 tablet:pt-t16 tablet:min-w-[22.78vw] " +
      "desktop:gap-d8 desktop:px-d24 desktop:pb-d14 desktop:pt-d16 desktop:min-w-[12.15vw] ";
    const primaryStateStyle =
      "disabled:bg-lightgray disabled:text-gray " +
      "tablet:hover:bg-gray tablet:hover:border-gray " +
      "tablet:active:bg-black tablet:active:text-white";

    buttonStyle = primaryShapeStyle + primaryLayoutStyle + primaryStateStyle;

    iconStyle =
      "fill-white " +
      "aspect-square w-m24 " +
      "tablet:w-t24 desktop:w-d24 " +
      "group-disabled:fill-gray " +
      "tablet:group-hover:fill-white tablet:group-active:fill-white ";
  }

  if (isSecondary) {
    const secondaryShapeStyle = "bg-white border border-black text-black ";
    const secondaryLayoutStyle =
      "group button flex w-full place-content-center place-items-center " +
      "gap-m8 px-m24 pb-m14 pt-m16 " +
      "tablet:gap-t8 tablet:px-t24 tablet:pb-t14 tablet:pt-t16 tablet:min-w-[22.78vw] " +
      "desktop:gap-d8 desktop:px-d24 desktop:pb-d14 desktop:pt-d16 desktop:min-w-[12.15vw] ";
    const secondaryStateStyle =
      "disabled:bg-white disabled:border disabled:border-lightgray disabled:text-gray " +
      "tablet:hover:bg-black tablet:hover:text-white " +
      "tablet:active:bg-white tablet:active:border tablet:active:border-black tablet:active:text-black ";

    buttonStyle =
      secondaryShapeStyle + secondaryLayoutStyle + secondaryStateStyle;

    iconStyle =
      "fill-black " +
      "aspect-square w-m24 " +
      "tablet:w-t24 desktop:w-d24" +
      "group-disabled:fill-gray " +
      "tablet:group-hover:fill-white tablet:group-active:fill-black ";
  }

  if (isTertiary) {
    const tertiaryShapeStyle = "bg-black border border-white text-white ";
    const tertiaryLayoutStyle =
      "group button flex w-full place-content-center place-items-center " +
      "gap-m8 px-m24 pb-m14 pt-m16 " +
      "tablet:gap-t8 tablet:px-t24 tablet:pb-t14 tablet:pt-t16 tablet:min-w-[22.78vw] " +
      "desktop:gap-d8 desktop:px-d24 desktop:pb-d14 desktop:pt-d16 desktop:min-w-[12.15vw] ";
    const tertiaryStateStyle =
      "disabled:bg-black disabled:border disabled:border-lightgray disabled:text-gray " +
      "active:bg-white active:border-white active:text-black " +
      "tablet:hover:bg-white tablet:hover:text-gray " +
      "tablet:active:bg-white tablet:active:border tablet:active:border-white tablet:active:text-black ";

    buttonStyle = tertiaryShapeStyle + tertiaryLayoutStyle + tertiaryStateStyle;

    iconStyle =
      "fill-white " +
      "aspect-square w-m24 " +
      "tablet:w-t24 desktop:w-d24" +
      "group-disabled:fill-gray group-active:fill-black " +
      "tablet:group-hover:fill-gray tablet:group-active:fill-black ";
  }

  return (
    <button disabled={disabled} className={buttonStyle}>
      {leftIcon && <LeftIcon className={iconStyle} />}
      {children}
      {rightIcon && <RightIcon className={iconStyle} />}
    </button>
  );
};

export default Button;
