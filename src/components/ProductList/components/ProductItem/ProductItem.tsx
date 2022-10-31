import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Button from "../../../UI/Button/Button";
import { LANGUAGE } from "../../../../const/const";
import { IItemInCart, IProduct } from "../../../../types/types";

import styles from "./ProductItem.module.scss";

interface Props {
  product: IProduct;
  onAdd: (el: IItemInCart) => void;
}

const ProductItem: FC<Props> = (props) => {
  const { product, onAdd } = props;
  const { title, material, oldPrice, newPrice, colors, sizes } = product;
  const [choosenSize, setChoosenSize] = useState("");
  const [requiredAlert, setRequiredAlert] = useState("");
  const [btnEffectOnClick, setBtnEffectOnClick] = useState("");
  const keepSizesStyles = useRef<any>(null);
  const keepTimeout = useRef<any>(null);

  const isChoosen = Boolean(choosenSize !== "");
  const isDiscount = Boolean(oldPrice !== newPrice);

  const discountAmount = Math.round(
    ((+oldPrice - +newPrice) / +oldPrice) * 100
  );

  // First letter toUpperCase
  const re = /^.(.*)/gm;
  // @ts-ignore
  const showTitle = title[0].toUpperCase() + re.exec(title)[1];
  // Split string - product materials, sizes
  const materialArr = material.split(", ");
  const sizesArr = sizes.toUpperCase().split(", ");

  const clearSizesStyles = useCallback(() => {
    const tempObj: { [key: string]: string } = {};
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i].toString();
      tempObj[size] = "";
    }
    keepSizesStyles.current = { ...tempObj };
  }, []);

  useEffect(() => {
    clearSizesStyles();

    return () => {
      clearSizesStyles();
      clearTimeout(keepTimeout.current);
    };
  }, []);

  const sizeStyle = useCallback((el: string) => {
    if (keepSizesStyles.current) {
      return keepSizesStyles.current[el];
    }
    return "";
  }, []);

  const onChooseSize = useCallback(
    (size: string) => {
      if (choosenSize === size) {
        setChoosenSize("");
        keepSizesStyles.current[size] = "";
      } else {
        // Remove set styles
        clearTimeout(keepTimeout.current);
        setRequiredAlert("");

        setChoosenSize(size);
        // Set new styles
        clearSizesStyles();
        keepSizesStyles.current[size] = styles.productItem__size__value_active;
      }
    },
    [isChoosen, choosenSize]
  );

  const addToCart = useCallback(() => {
    if (!isChoosen) {
      // Show styled "required" notification
      setRequiredAlert(styles.requiredAlert);
      // Remove it in 3s
      clearTimeout(keepTimeout.current);
      keepTimeout.current = setTimeout(() => {
        setRequiredAlert("");
      }, 3000);
    } else {
      setChoosenSize("");
      clearSizesStyles();
      // Cb from parent
      const addVariant: IItemInCart = {
        id: `${product.sku}-${choosenSize}`,
        title: product.title,
        sku: product.sku,
        size: choosenSize,
        oldPrice,
        newPrice,
        discount: discountAmount,
        quantity: 1,
      };
      onAdd(addVariant);
      // Button "click" effect on click
      setBtnEffectOnClick(styles.btnClick);
      clearTimeout(keepTimeout.current);
      keepTimeout.current = setTimeout(() => {
        setBtnEffectOnClick("");
      }, 300);
    }
  }, [product, choosenSize]);

  const id = product._id;
  if (id === "delivery") {
    return <div className={styles.productItem}></div>;
  } else {
    return (
      <div className={styles.productItem}>
        <div className={styles.productItem__img}>
          {isDiscount && (
            <div className={styles.productItem__img__note}>
              <span>
                {LANGUAGE.RU.DISCOUNT}&nbsp;{discountAmount}%!
              </span>
            </div>
          )}
          <img src="" alt="product.webp" />
        </div>

        <div className={styles.productItem__name}>
          <p>{showTitle}</p>
          <p className={styles.productItem__name_hint}>
            {materialArr.map((el: string) => {
              return (
                <span key={el}>
                  <span>{el}</span>
                  <br />
                </span>
              );
            })}
          </p>
        </div>

        <div className={styles.productItem__price}>
          {isDiscount && (
            <>
              <span className={styles.productItem__price_new}>
                <strong>
                  &nbsp;{newPrice}
                  {LANGUAGE.RU.CURRENCY}&nbsp;
                </strong>
              </span>
              <span className={styles.productItem__price_old}>
                {oldPrice}
                {LANGUAGE.RU.CURRENCY}
              </span>
            </>
          )}
          {!isDiscount && (
            <span className={styles.productItem__price_usual}>
              <strong>
                {oldPrice}
                {LANGUAGE.RU.CURRENCY}
              </strong>
            </span>
          )}
        </div>

        <div className={styles.productItem__color}></div>

        <div className={styles.productItem__size}>
          {sizesArr.map((el: string) => {
            return (
              <div
                className={styles.productItem__size__value}
                key={el}
                onClick={() => onChooseSize(el)}
              >
                <span className={sizeStyle(el) + " " + requiredAlert}>
                  <strong>{el}</strong>
                </span>
              </div>
            );
          })}
        </div>

        <div className={styles.btnWrapper + " " + btnEffectOnClick}>
          <div className={styles.productItem__addToCartBtn_effect} />
          <Button
            className={styles.productItem__addToCartBtn}
            onClick={addToCart}
          >
            <strong>{LANGUAGE.RU.ADDTOCART}</strong>
          </Button>
        </div>
      </div>
    );
  }
};

export default ProductItem;
