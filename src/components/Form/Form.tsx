import React, { FC, SyntheticEvent, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import styles from "./Form.module.scss";

const Form: FC = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const onNameChange = (e: any) => {
    setName(e.target.value);
  };
  const onPhoneChange = (e: any) => {
    setPhone(e.target.value);
  };

  const onSubmit = () => {
    console.log("submit!");
  };

  return (
    <form>
      <Input placeholder={"Имя"} value={name} onChange={onNameChange}></Input>
      <Input
        placeholder={"Телефон"}
        value={phone}
        onChange={onPhoneChange}
      ></Input>
      <Button onClick={onSubmit}>Отправить заявку</Button>
    </form>
  );
};

export default Form;
