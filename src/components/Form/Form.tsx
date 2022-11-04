import React, { FC, useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { LANGUAGE } from "../../const/const";

import styles from "./Form.module.scss";

const Form: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [inputNameStyle, setInputNameStyle] = useState<string>(
    styles.form__input
  );
  const [inputPhoneStyle, setInputPhoneStyle] = useState<string>(
    styles.form__input
  );
  const keepTimeout = useRef<null | NodeJS.Timeout>(null);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (name && phone) {
        return navigate("/success-page");
      }

      if (!name && !phone) {
        if (keepTimeout.current) {
          clearTimeout(keepTimeout.current);
        }
        keepTimeout.current = setTimeout(() => {
          setInputNameStyle(styles.form__input);
          setInputPhoneStyle(styles.form__input);
        }, 1000);

        setInputNameStyle((prev) => (prev += ` ${styles.form__input_alert}`));
        setInputPhoneStyle((prev) => (prev += ` ${styles.form__input_alert}`));
        return;
      }

      if (!name) {
        if (keepTimeout.current) {
          clearTimeout(keepTimeout.current);
        }
        keepTimeout.current = setTimeout(() => {
          setInputNameStyle(styles.form__input);
        }, 1000);

        setInputNameStyle((prev) => (prev += ` ${styles.form__input_alert}`));
        return;
      }

      if (!phone) {
        if (keepTimeout.current) {
          clearTimeout(keepTimeout.current);
        }
        keepTimeout.current = setTimeout(() => {
          setInputPhoneStyle(styles.form__input);
        }, 1000);

        setInputPhoneStyle((prev) => (prev += ` ${styles.form__input_alert}`));
        return;
      }
    },
    [name, phone]
  );

  return (
    <form className={styles.form}>
      <h3>{LANGUAGE.RU.LEAVE_YOUR_DATA}</h3>
      <Input
        type="text"
        placeholder={LANGUAGE.RU.NAME}
        value={name}
        onChange={onNameChange}
        className={inputNameStyle}
      />
      <Input
        type="text"
        placeholder={LANGUAGE.RU.PHONE}
        value={phone}
        onChange={onPhoneChange}
        className={inputPhoneStyle}
      />
      <Button className={styles.form__submitBtn} onClick={onSubmit}>
        <strong>{LANGUAGE.RU.SUBMIT_ORDER}</strong>
      </Button>
    </form>
  );
};

export default Form;
