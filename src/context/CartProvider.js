import { cartContext } from "./cartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (producto, cantidad) => {
        console.log(producto, cantidad)
        const isInCart = cart.find(
            (productInCart) => productInCart.id === producto.id
        );

        if (isInCart) {
            setCart(
                cart.map((productInCart) => {
                    if (productInCart.id === producto.id) {
                        return { ...isInCart, cantidad: isInCart.cantidad + 1 };
                    } else return productInCart;
                })
            );
        }

        else {
            setCart([...cart, { ...producto, cantidad: 1 }]);
        }

    };

    const removeProduct = (productId) => {
        let newArray = []
        cart.forEach((product) => {
            if (product.id === productId) {
                console.log(product);
            } else {
                newArray.push(product)
            }
        })
        setCart(newArray)

    };
    const clearCart = () => {
        setCart([]);
    };
    const totalProducts = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
    }
    return (
        <cartContext.Provider value={{ cart, addToCart, removeProduct, clearCart, totalProducts }}>
            {children}
        </cartContext.Provider>
    )
};
