import React from "react";
import "./style.css";
import { twMerge } from "tailwind-merge";
const STYLES = [
  `btn--primary`,
  `btn--secondary`,
  `btn--primary--outline`,
  `btn--disabled`,
];
const SIZE = ["btn--medium", "btn--small"];

export default function Button({
  children,
  onClick,
  buttonStyle,
  buttonSize,
  loading,
  spinStyle,
  className,
  ...rest
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <>
      {loading ? (
        <Spin spinning={true} className="me-3" style={spinStyle} />
      ) : (
        <button
          className={twMerge(
            `${checkButtonStyle} ${checkButtonSize}`,
            className
          )}
          onClick={onClick}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
}
