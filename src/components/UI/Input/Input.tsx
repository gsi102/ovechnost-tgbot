import React, { FC } from "react";

import styles from "./Input.module.scss";

const Input: FC<any> = (props) => {
  return <input {...props} className={styles.input + " " + props.className} />;
};

export default Input;
