import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Button from "../../../UI/Button/Button";

import styles from "./ProductItem.module.scss";

const ProductItem: FC<any> = (props) => {
  const { product, onAdd } = props;
  let { title, material, oldPrice, newPrice, colors, sizes } = product;

  const isDiscount = Boolean(oldPrice !== newPrice);
  const discountAmount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  const [choosenSize, setChoosenSize] = useState("");
  const sizesStylesObj = useRef<any>(null);
  const keepTimeout = useRef<any>(null);
  const [requiredField, setRequiredField] = useState("");
  const [btnEffectOnClick, setBtnEffectOnClick] = useState("");

  const isChoosen = Boolean(choosenSize !== "");

  // First letter toUpperCase
  const re = /^.(.*)/gm;
  // @ts-ignore
  title = title[0].toUpperCase() + re.exec(title)[1];
  // Split string - product materials, sizes
  material = material.split(", ");
  sizes = sizes.toUpperCase().split(", ");

  useEffect(() => {
    clearSizesStyles();

    return () => {
      clearSizesStyles();
      clearTimeout(keepTimeout.current);
    };
  }, []);

  const sizeStyle = useCallback((el: string) => {
    if (sizesStylesObj.current) {
      return sizesStylesObj.current[el];
    }
    return "";
  }, []);

  const clearSizesStyles = useCallback(() => {
    const tempObj: any = {};
    for (let i = 0; i < sizes.length; i++) {
      tempObj[sizes[i].toString()] = "";
    }
    sizesStylesObj.current = { ...tempObj };
  }, []);

  const onChooseSize = useCallback(
    (size: string) => {
      if (choosenSize === size) {
        setChoosenSize("");
        sizesStylesObj.current[size] = "";
      } else {
        setChoosenSize(size);
        setRequiredField("");
        clearSizesStyles();
        clearTimeout(keepTimeout.current);
        sizesStylesObj.current[size] = styles.productItem__size__value_active;
      }
    },
    [isChoosen, choosenSize]
  );

  const addToCart = useCallback(() => {
    if (!isChoosen) {
      setRequiredField(styles.requiredField);
      clearTimeout(keepTimeout.current);
      keepTimeout.current = setTimeout(() => {
        setRequiredField("");
      }, 3000);
    } else {
      setChoosenSize("");
      clearSizesStyles();
      onAdd(product);
      setBtnEffectOnClick(styles.btnClick);
      clearTimeout(keepTimeout.current);
      keepTimeout.current = setTimeout(() => {
        setBtnEffectOnClick("");
      }, 300);
    }
  }, [product, choosenSize]);

  return (
    <div className={styles.productItem}>
      <div className={styles.productItem__img}>
        {isDiscount && (
          <div className={styles.productItem__img__note}>
            <span>скидка {discountAmount}%!</span>
          </div>
        )}
        <img src="" alt="product.webp" />
      </div>

      <div className={styles.productItem__name}>
        <p>{title}</p>
        <p className={styles.productItem__name_hint}>
          {material.map((el: string) => {
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
              <strong>&nbsp;{newPrice}р.&nbsp;</strong>
            </span>
            <span className={styles.productItem__price_old}>{oldPrice}р.</span>
          </>
        )}
        {!isDiscount && (
          <span className={styles.productItem__price_usual}>
            <strong>{oldPrice}р.</strong>
          </span>
        )}
      </div>
      <div className={styles.productItem__color}></div>
      <div className={styles.productItem__size}>
        {sizes.map((el: string) => {
          return (
            <div
              className={styles.productItem__size__value}
              key={el}
              onClick={() => onChooseSize(el)}
            >
              <span className={sizeStyle(el) + " " + requiredField}>
                <strong>{el}</strong>
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.btnWrapper}>
        <div
          className={
            styles.productItem__addToCartBtn_effect + " " + btnEffectOnClick
          }
        />
        <Button
          className={styles.productItem__addToCartBtn}
          onClick={addToCart}
        >
          <strong>В корзину2</strong>
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
