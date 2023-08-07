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

  /** Type별 Shape 스타일 */
  const primaryStyle = isPrimary ? "bg-black border-none text-white " : "";
  const secondaryStyle = isSecondary
    ? "bg-white border border-black text-black "
    : "";
  const tertiaryStyle = isTertiary
    ? "bg-black border border-white text-white "
    : "";

  const commonLayoutStyle =
    "group button flex w-full place-content-center place-items-center ";

  /** Mobile Layout & State Style */
  const mobileStyle =
    "gap-m8 px-m24 pb-m14 pt-m16 " +
    (isPrimary ? "disabled:bg-lightgray disabled:text-gray " : "") +
    (isSecondary
      ? "disabled:bg-white disabled:border disabled:border-lightgray disabled:text-gray"
      : "") +
    (isTertiary
      ? "disabled:bg-black disabled:border disabled:border-lightgray disabled:text-gray " +
        "active:bg-white active:border-none active:text-black "
      : "");

  /** Tablet Layout & State Style */
  const tabletStyle =
    "tablet:gap-t8 tablet:px-t24 tablet:pb-t14 tablet:pt-t16 tablet:min-w-[22.78vw] " +
    (isPrimary
      ? "tablet:hover:bg-gray tablet:hover:border-none " +
        "tablet:active:bg-black tablet:active:text-white "
      : "") +
    (isSecondary
      ? "tablet:hover:bg-black tablet:hover:text-white " +
        "tablet:active:bg-white tablet:active:border tablet:active:border-black tablet:active:text-black "
      : "") +
    (isTertiary
      ? "tablet:hover:bg-white tablet:hover:text-gray " +
        "tablet:active:bg-white tablet:active:border tablet:active:border-black tablet:active:text-black "
      : "");

  /** Desktop Layout State Style */
  /** 여기는 Tablet의 속성을 그대로 가져오므로 따로 설정하지 않는다(min-width에 의해) */
  const desktopStyle =
    "desktop:gap-d8 desktop:px-d24 desktop:pb-d14 desktop:pt-d16 desktop:min-w-[12.15vw] ";

  /** Icon 스타일  */
  const iconStyle =
    "aspect-square w-m24 fill-white group-disabled:fill-gray tablet:w-t24 desktop:w-d24 " +
    (isPrimary
      ? "tablet:group-hover:fill-white tablet:group-active:fill-white "
      : "") +
    (isSecondary
      ? "tablet:group-hover:fill-white tablet:group-active:fill-black "
      : "") +
    (isTertiary
      ? "tablet:group-hover:fill-black tablet:group-active:fill-black"
      : "");

  return (
    <button
      disabled={disabled}
      className={`${primaryStyle} ${secondaryStyle} ${tertiaryStyle} ${commonLayoutStyle} ${mobileStyle} ${tabletStyle} ${desktopStyle} `}
    >
      {leftIcon && <LeftIcon className={iconStyle} />}
      {children}
      {rightIcon && <RightIcon className={iconStyle} />}
    </button>
  );
};

export default Button;
