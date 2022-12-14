import carro from "./carro.png"
import './cart.css';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const CartWidget = (detalle) =>{
    const {totalProducts} = useContext(cartContext)
    return(
        <>
       <NavLink to={'/cart'}> 
       
       <img className="cartWidget" alt={detalle.nombre} src={carro} />
       <span style={{ marginLeft:'20px',backgroundColor:"lightblue" , borderRadius: '999px' , textDecoration:'none' }}>
       {totalProducts() > 0 ? totalProducts() : '0'}
       </span>
       </NavLink>
       
       </>
    );
};
export default CartWidget;