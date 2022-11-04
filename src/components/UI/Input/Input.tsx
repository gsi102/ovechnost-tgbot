import React, { FC, useRef } from "react";

import styles from "./Input.module.scss";

const Input: FC<any> = (props) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      inputRef?.current?.blur();
    }
  };

  return (
    <input
      {...props}
      ref={inputRef}
      className={styles.input + " " + props.className}
      type={props.type ? props.type : "text"}
      onKeyDown={(e) => onKeyDown(e)}
    />
  );
};

export default Input;
