import carro from "./carro.png"
import './cart.css';
import { NavLink } from "react-router-dom";
const CartWidget = (detalle) =>{
    return(
        <>
       <NavLink to={'/cart'}> <img className="cartWidget" src={carro} /></NavLink>
       <h2>{detalle.cantidad}</h2>
       </>
    );
};
export default CartWidget;