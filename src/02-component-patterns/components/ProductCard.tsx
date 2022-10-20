import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement, useContext } from "react";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);

export const ProductImage = ({ img = "" }) => {

const { product } = useContext( ProductContext );
let imgToShow: string;

if ( img ) {
    imgToShow = img;
} else if ( product.img ) {
    imgToShow = product.img
} else {
    imgToShow = noImage
}

return (
    <img
        src={ imgToShow }
        alt="Product"
        className={styles.productImg}
      />
)
};

export const ProductTitle = ({ title }: {title?: string}) => {
    const { product } = useContext( ProductContext )


    return (
        <span className={styles.productDescription}>        
            {title ? title : product.title}
        </span>
    )
};

interface ProductButtonsProps {
  addValue?: number;
  minusValue?: number;
}

export const ProductButtons = ({addValue = 1, minusValue = -1 }: ProductButtonsProps) => {

    const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
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

export const ProductCard = ({ product, children }: Props) => {
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

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
