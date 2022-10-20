import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";

import {  ProductContextProps, ProductCardProps} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({ product, children }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <ProductContext.Provider
      value={{
        counter,
        increaseBy,
        product,
      }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </ProductContext.Provider>
  );
};

