import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./intreface";

export const Button: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  return (
    <button
      onClick={buttonProps.onClick}
      className={`${styles.container} ${buttonProps.className}`}
      {...buttonProps}
    >
      {buttonProps.children}
    </button>
  );
};
