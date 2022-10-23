import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  addValue?: number;
  minusValue?: number;
  className?: string,
  style?: React.CSSProperties,
}


export const ProductButtons = ({addValue = 1, minusValue = -1, className, style }: Props) => {

    

    const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(minusValue)}>-</button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(addValue)}>+</button>
    </div>
  );
};