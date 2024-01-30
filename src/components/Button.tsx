import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import styles from "./Button.module.css";

export function Button({
  children,
  ...rest
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
