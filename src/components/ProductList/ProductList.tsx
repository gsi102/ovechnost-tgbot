import React, { FC, useCallback, useEffect, useState } from "react";
import ProductItem from "./components/ProductItem/ProductItem";
import { LANGUAGE, SERVER } from "../../const/const";
import { useTelegram } from "../../hooks/useTelegram";

import styles from "./ProductList.module.scss";
import { useNavigate } from "react-router-dom";

// const TEMPARRAYLOCAL = [
//   {
//     _id: "63561f8f61e8dffe1c9f8e28",
//     title: "наколенники",
//     oldPrice: "2500",
//     newPrice: "1880",
//     material: "95% овечья шерсть, 5% спандекс + эластан",
//     color: "caramel",
//     sku: "kneebondages1",
//     sizes: "m, l, xl",
//     isInStockColor1: "1, 1, 1",
//   },
//   {
//     _id: "635622cf61e8dffe1c9f8e32",
//     title: "носки",
//     oldPrice: "1080",
//     newPrice: "1080",
//     material: "100% овечья шерсть",
//     color: "caramel, red",
//     sku: "socks1",
//     sizes: "36-40, 41-45",
//     isInStockColor1: "1, 1",
//     isInStockColor2: "1, 0",
//   },
//   {
//     _id: "63566a7c61e8dffe1c9f8e4b",
//     title: "наколенники",
//     oldPrice: "3500",
//     newPrice: "2480",
//     material: "100% шерсть верблюда",
//     color: "brown",
//     sku: "kneebondages2",
//     sizes: "42/s-56/xl",
//     isInStockColor1: "1",
//   },
//   {
//     _id: "63566b6261e8dffe1c9f8e4c",
//     title: "пояс",
//     oldPrice: "1580",
//     newPrice: "980",
//     material: "100% овечья шерсть",
//     color: "caramel, dark",
//     sku: "waist1",
//     sizes: "s, m, l, xl",
//     isInStockColor1: "1, 1, 1, 1",
//     isInStockColor2: "0, 1, 1, 1",
//   },
//   {
//     _id: "63566d3b61e8dffe1c9f8e4d",
//     title: "жилет",
//     oldPrice: "3680",
//     newPrice: "3680",
//     material: "95% овечья шерсть, 5% спандекс+эластан",
//     color: "caramel",
//     sku: "vest1",
//     sizes: "s, m, l, xl",
//     isInStockColor1: "0, 0, 1, 1",
//   },
//   {
//     _id: "635673b561e8dffe1c9f8e4e",
//     title: "стельки",
//     oldPrice: "250",
//     newPrice: "250",
//     material: "95% овечья шерсть, 5% войлок",
//     color: "caramel",
//     sku: "insoles1",
//     sizes: "35-36, 37-38, 39-40, 41-42, 43-44, 45-46",
//     isInStockColor1: "1, 1, 1, 1, 1, 1",
//   },
//   {
//     _id: "63561f8f61e8dffe1c9f8e28",
//     title: "наколенники",
//     oldPrice: "2500",
//     newPrice: "1880",
//     material: "95% овечья шерсть, 5% спандекс + эластан",
//     color: "caramel",
//     sku: "kneebondages1",
//     sizes: "m, l, xl",
//     isInStockColor1: "1, 1, 1",
//   },
//   {
//     _id: "635622cf61e8dffe1c9f8e32",
//     title: "носки",
//     oldPrice: "1080",
//     newPrice: "1080",
//     material: "100% овечья шерсть",
//     color: "caramel, red",
//     sku: "socks1",
//     sizes: "36-40, 41-45",
//     isInStockColor1: "1, 1",
//     isInStockColor2: "1, 0",
//   },
// ];

const ProductList: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const { tg } = useTelegram();
  const navigate = useNavigate();

  // TEMPORARY
  // useEffect(() => {
  //   setProducts([...TEMPARRAYLOCAL]);
  // }, []);

  useEffect(() => {
    let fetched = false;

    if (!fetched) {
      const request = async () => {
        await fetch(`${SERVER}/products/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((res) => {
            const fetchedProducts = res.data;
            setProducts(fetchedProducts);
          });
      };
      try {
        request();
      } catch (e) {
        console.log(e);
      }
    }

    return () => {
      fetched = true;
    };
  }, []);

  useEffect(() => {
    let priceTotal = 0;
    cart.map((el) => (priceTotal += +el.newPrice));

    tg.MainButton.setParams({
      text: `${LANGUAGE.RU.TOCHECKOUT}: ${priceTotal}${LANGUAGE.RU.CURRENCY}`,
    });

    if (cart.length !== 0 && !tg.MainButton.isVisible) {
      tg.MainButton.show();
    }

    if (cart.length === 0 && tg.MainButton.isVisible) {
      tg.MainButton.hide();
    }
  }, [cart]);

  const goToCheckout = useCallback((cart: any) => {
    tg.MainButton.hide();
    navigate("/checkout", {
      replace: false,
      state: cart,
    });
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", () => goToCheckout(cart));
    return () => {
      tg.offEvent("mainButtonClicked", () => goToCheckout(cart));
    };
  }, [cart]);

  const addToCart = useCallback(
    (product: any) => {
      const temp = [...cart, product];
      setCart([...temp]);
    },
    [cart]
  );

  const productsLeft = products.filter((el, index) => index % 2 === 0);
  const productsRight = products.filter((el, index) => index % 2 === 1);

  return (
    <div className={styles.productList}>
      <div
        className={styles.productList__note}
        // onClick={() => goToCheckout(cart)}
      >
        <span className={styles.productList__note__header}>
          <div className={styles.productList__note__header__delivery}>
            <img alt="delivery.webp" />
          </div>
          <strong>
            Бесплатная
            <br />
            доставка
          </strong>
        </span>
        <span>на заказы от 4000р.</span>
      </div>

      {/* TWO PRODUCTS IN A ROW */}
      <div className={styles.productList__left}>
        {productsLeft.map((el: any) => {
          return (
            <div key={el._id}>
              <ProductItem product={el} onAdd={addToCart} />
            </div>
          );
        })}
      </div>
      <div className={styles.productList__right}>
        {productsRight.map((el: any) => {
          return (
            <div key={el._id}>
              <ProductItem product={el} onAdd={addToCart} />
            </div>
          );
        })}
      </div>

      {/* SINGLE PRODUCT IN A ROW */}
      {/* {products.map((el: any) => {
        return (
          <div key={el._id}>
            <ProductItem product={el} onAdd={addToCart} />
          </div>
        );
      })} */}
    </div>
  );
};

export default ProductList;
