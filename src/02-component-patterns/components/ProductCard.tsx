import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
    product: Product,

}

interface Product {
    id: string,
    title: string,
    img?: string,
}


export const ProductImage = ({img = ''}) => (
    <img src={img ? img : noImage} alt='Product' className={styles.productImg}/>
)

export const ProductTitle = ({title}: {title:string}) => (
    <span className={ styles.productDescription }>{title}</span>
)

interface ProductButtonsProps {
    increaseBy: (value: number) => void,
    counter: number,
    addValue?: number,
    minusValue?: number,
}

export const ProductButtons = ({addValue = 1, minusValue = -1, increaseBy, counter}: ProductButtonsProps) => {



    return (
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus}
        onClick={() => increaseBy(minusValue)}> - </button>

        <div className={styles.countLabel}> {counter} </div>

        <button className={styles.buttonAdd} onClick={() => increaseBy(addValue)}> + </button>
    </div>
    )
}


export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy} = useProduct();

  return (
    <div className={ styles.productCard}>
        
        <ProductImage img={product.img} />
       
        <ProductTitle title={product.title} />

        <ProductButtons  
            addValue={5} 
            minusValue={-5} 
            increaseBy={increaseBy} 
            counter={counter} />

    </div>
  )
}
