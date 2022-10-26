import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";

import {  ProductContextProps, Product, onChangeArgs} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <ProductContext.Provider
      value={{
        counter,
        increaseBy,
        product,
      }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  );
};

