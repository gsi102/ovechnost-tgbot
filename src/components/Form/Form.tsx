import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { LANGUAGE } from "../../const/const";

import styles from "./Form.module.scss";

const Form: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const onNameChange = (e: any) => {
    setName(e.target.value);
  };
  const onPhoneChange = (e: any) => {
    setPhone(e.target.value);
  };

  const onSubmit = () => {
    navigate("/success-page");
  };

  return (
    <form className={styles.form}>
      <h3>{LANGUAGE.RU.LEAVE_YOUR_DATA}</h3>
      <Input
        type="text"
        placeholder={LANGUAGE.RU.NAME}
        value={name}
        onChange={onNameChange}
        className={styles.form__input}
      />
      <Input
        type="text"
        placeholder={LANGUAGE.RU.PHONE}
        value={phone}
        onChange={onPhoneChange}
        className={styles.form__input}
      />
      <Button className={styles.form__submitBtn} onClick={onSubmit}>
        <strong>{LANGUAGE.RU.SUBMIT_ORDER}</strong>
      </Button>
    </form>
  );
};

export default Form;
