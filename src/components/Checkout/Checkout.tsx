import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../Form/Form";
import ItemInCart from "./components/ItemInCart/ItemInCart";
import { LANGUAGE } from "../../const/const";
import { IItemInCart } from "../../types/types";

import styles from "./Checkout.module.scss";

const Checkout: FC = () => {
  const location = useLocation();
  let order = location?.state;
  const [items, setItems] = useState<IItemInCart[]>([]);

  const groupSimilar = useCallback((arr: IItemInCart[]) => {
    // let arr = [...order];
    let grouped: IItemInCart[] = [];
    for (let i = 0; i < arr.length; i++) {
      const current = { ...arr[i] };
      for (let j = i + 1; j < arr.length; j++) {
        const next = { ...arr[j] };
        if (current.id === next.id) {
          arr.splice(j, 1);
          j--;
          current.quantity++;
        }
      }
      grouped = [...grouped, { ...current }];
    }
    return [...grouped];
  }, []);

  useEffect(() => {
    order = groupSimilar(order);
    setItems(order);
  }, []);

  const totalAmount = useMemo(() => {
    return items.reduce(
      (previous: number, current: IItemInCart) =>
        +previous + +current.newPrice * current.quantity,
      0
    );
  }, [items]);

  const changeQty = useCallback(
    (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
      const newQty = e.target.value;
      const newList = items.map((item) => {
        if (item.id === id) item.quantity = +newQty;
        return item;
      });

      setItems(newList);
    },
    [items]
  );

  const deleteItem = useCallback(
    (itemID: string) => {
      const updatedOrder = items.filter((el: IItemInCart) => el.id !== itemID);
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
      {items.map((item: IItemInCart) => {
        return (
          <ItemInCart
            item={item}
            changeQty={changeQty}
            deleteItem={deleteItem}
          />
        );
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
