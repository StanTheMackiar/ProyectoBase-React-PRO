import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  addValue?: number;
  minusValue?: number;
  className?: string,
  style?: React.CSSProperties,
}


export const ProductButtons = ({addValue = 1, minusValue = -1, className, style }: Props) => {


    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
      (): boolean => !!maxCount && counter === maxCount
      ,[counter, maxCount],
    )
    

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(minusValue)}>-</button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() &&styles.disabled}`}
        disabled={isMaxReached()}
        onClick={() =>  increaseBy(addValue)}>+</button>
    </div>
  );
};