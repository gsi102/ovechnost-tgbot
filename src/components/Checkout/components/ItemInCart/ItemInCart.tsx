import Button from "../../../UI/Button/Button";
import React, { FC } from "react";
import { LANGUAGE } from "../../../../const/const";

import styles from "./ItemInCart.module.scss";

const ItemInCart: FC<any> = (props) => {
  const deleteItem = props.deleteItem;
  let { id, title, sku, size, newPrice, oldPrice, discount, quantity } =
    props.item;
  title = title.toUpperCase();
  const isDiscount = Boolean(discount !== 0);

  return (
    <div className={styles.checkout__order__item}>
      <h4>
        {title} - размер {size}
      </h4>
      <p className={styles.checkout__order__item_color}>Цвет: карамель</p>
      <p>Количество: {quantity}</p>
      <p className={styles.checkout__order__item_price}>
        {isDiscount && (
          <>
            <span className={styles.checkout__order__item_price_new}>
              <strong>
                {newPrice}
                {LANGUAGE.RU.CURRENCY}
              </strong>
            </span>
            <span className={styles.checkout__order__item_price_old}>
              {oldPrice}
              {LANGUAGE.RU.CURRENCY}
            </span>
            <p className={styles.checkout__order__item_price_discount}>
              <span>
                <i>скидка -{discount}%</i>
              </span>
            </p>
          </>
        )}
        {!isDiscount && (
          <>
            <span>
              <strong>
                {newPrice}
                {LANGUAGE.RU.CURRENCY}
              </strong>
            </span>
          </>
        )}
      </p>
      <Button
        className={styles.checkout__order__item__deleteBtn}
        onClick={() => deleteItem(id)}
      >
        Убрать
      </Button>
      <hr />
    </div>
  );
};

export default ItemInCart;
