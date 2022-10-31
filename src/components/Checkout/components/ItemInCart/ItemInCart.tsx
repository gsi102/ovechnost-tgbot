import Button from "../../../UI/Button/Button";
import React, { FC } from "react";
import { LANGUAGE } from "../../../../const/const";
import Input from "../../../UI/Input/Input";

import styles from "./ItemInCart.module.scss";
import { IItemInCart } from "../../../../types/types";

interface Props {
  item: IItemInCart;
  changeQty: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteItem: (itemID: string) => void;
}

const ItemInCart: FC<Props> = (props) => {
  const { changeQty, deleteItem } = props;
  let { id, title, sku, size, newPrice, oldPrice, discount, quantity } =
    props.item;
  title = title.toUpperCase();
  const isDiscount = Boolean(discount !== 0);

  return (
    <div className={styles.checkout__order__item}>
      <h4>
        {title} - {LANGUAGE.RU.SIZE} {size}
      </h4>
      <p className={styles.checkout__order__item_color}>
        {LANGUAGE.RU.COLOR}: карамель
      </p>
      <div>
        <label htmlFor={styles.checkout__order__item__qty}>
          {LANGUAGE.RU.QUANTITY}:&nbsp;
        </label>
        <Input
          type="number"
          min="1"
          defaultValue={quantity}
          id={styles.checkout__order__item__qty}
          onChange={(e: any) => changeQty(id, e)}
        />
      </div>
      <div className={styles.checkout__order__item_price}>
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
                <i>
                  {LANGUAGE.RU.DISCOUNT} -{discount}%
                </i>
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
      </div>
      <Button
        className={styles.checkout__order__item__deleteBtn}
        onClick={() => deleteItem(id)}
      >
        {LANGUAGE.RU.REMOVE}
      </Button>
      <hr />
    </div>
  );
};

export default ItemInCart;
