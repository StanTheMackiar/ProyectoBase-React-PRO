import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";


export const useShoppingCart = () => {
const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

    setShoppingCart( oldShoppingCart => {

      const productInCar: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

       if( Math.max( productInCar.count + count, 0 ) > 0) {
        productInCar.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCar
        }
      }

      // Borrar producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      //Codigo anterior
      
      // if (!count) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // } 
      
      // return {
      //   ...oldShoppingCart,
      //   [ product.id ]: { ...product, count }
      // }
     
    } )
  };

  return {
    shoppingCart,
    onProductCountChange, 
  }
} 