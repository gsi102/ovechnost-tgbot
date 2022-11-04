import React, { FC } from "react";

import styles from "./SuccessPage.module.scss";

const SuccessPage: FC = () => {
  return (
    <div className={styles.successPage}>
      <h3>Заявка принята!</h3>
      <p>
        Наш оператор скоро свяжется с вами. Пожалуйста, держите телефон
        включенным.
      </p>
    </div>
  );
};

export default SuccessPage;
