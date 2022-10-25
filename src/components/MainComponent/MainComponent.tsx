import React, { FC, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import { useTelegram } from "../../hooks/useTelegram";

import styles from "./MainComponent.module.scss";

const MainComponent: FC = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={styles.mainComponent}>
      <ProductList />
    </div>
  );
};

export default MainComponent;
