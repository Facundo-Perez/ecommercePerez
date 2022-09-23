import { cartContext } from "./cartContext";
import {  useState } from "react";

export const CartProvider = ({children}) => {
    const [cart , setCart] = useState([]);

    const addToCart = (producto, cantidad) => {
        if (isInCart(producto.id)) {
            alert('Ya esta en el carrito');
        }
        else{
            setCart([...cart, {...producto,cantidad}]);
        }
    };
    const isInCart = (id) => {
        return cart.some((producto)=> producto.id === id);
    };
    const removeProduct = (id) => {
        return cart.splice((producto) => producto.id === id)
    };
    const clearCart = () => {
        setCart([]);
    };
return(
    <cartContext.Provider value={{cart, addToCart}}>
        {children}
    </cartContext.Provider>
)
    }

