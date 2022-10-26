import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";


export const ShoppingPage = () => {

  const {onProductCountChange, shoppingCart} = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
            className="bg-dark text-white"
            >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
              {
                Object.entries(shoppingCart).map(([key, product]) => (
                  <ProductCard
                  key={key}
                  style={{ width: "100px" }}
                  product={product}
                  className="bg-dark text-white"
                  onChange={ onProductCountChange }
                  value={product.count}>
                  <ProductImage
                    className="custom-image"
                    style={{
                      boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
                    }}
                  />
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
                ))
              }

        </div>
      </div>
    

    </div>
  );
};
