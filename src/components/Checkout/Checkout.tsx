import React, { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../Form/Form";
import ItemInCart from "./components/ItemInCart/ItemInCart";
import { LANGUAGE } from "../../const/const";

import styles from "./Checkout.module.scss";

const Checkout: FC = () => {
  const location = useLocation();
  let order = location?.state;

  // useEffect(() => {
  //   let arr = [...order];
  //   let filtered: any[] = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let index = i;
  //     if (i === arr.length) {
  //       filtered = [...filtered, arr[i]];
  //       break;
  //     }
  //     for (let j = 1; j < arr.length; j++) {
  //       if (arr[i].id === arr[j].id) {
  //         arr[i].quantity++;
  //         j++;
  //         index++;
  //       }
  //     }
  //     filtered = [...filtered, arr[i]];
  //   }
  //   console.log({ filtered });
  // }, []);

  const [items, setItems] = useState(order);
  const totalAmount = items.reduce(
    (previous: any, current: any) => +previous + +current.newPrice,
    0
  );

  const deleteItem = useCallback(
    (itemID: string) => {
      const updatedOrder = items.filter((el: any) => el.id !== itemID);
      setItems(updatedOrder);
    },
    [items]
  );

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__header}>
        <p>
          <strong>{LANGUAGE.RU.CHECK_CART}</strong>
        </p>
      </div>
      <h3>Заказ</h3>
      {items.map((item: any) => {
        return <ItemInCart item={item} deleteItem={deleteItem} />;
      })}
      <span className={styles.checkout__total}>
        <h3>
          {LANGUAGE.RU.TOTAL}:&nbsp;
          <strong>
            {totalAmount}
            {LANGUAGE.RU.CURRENCY}
          </strong>
        </h3>
      </span>
      <Form />
    </div>
  );
};

export default Checkout;