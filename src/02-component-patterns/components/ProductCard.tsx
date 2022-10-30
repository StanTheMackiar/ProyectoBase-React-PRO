import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties } from "react";

import {  ProductContextProps, Product, onChangeArgs, initialValues, ProductCardHandlers} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: initialValues;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
  = useProduct({ onChange, product, value, initialValues });

  return (
    <ProductContext.Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,

            increaseBy,
            reset,
          })
        }
      </div>
    </ProductContext.Provider>
  );
};

