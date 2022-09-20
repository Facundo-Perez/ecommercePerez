import Counter from "../Counter/ItemCount";
import { NavLink } from "react-router-dom";
import './ItemDetail.css';
const ItemDetail = ({detalle}) => {
  
    return (
    <div className="ItemDetail">
        <img src={detalle.image} alt={detalle.title}/>
        <h2>{detalle.title}</h2>
        <Counter stock={detalle.cantidad}/>
        <NavLink to={'/cart'} style={{textDecoration:'none'}}><button className="btnAddToCart">Agregar al carrito</button></NavLink>
        <h3>${detalle.price}</h3>
        <p>{detalle.detail}</p>
    </div>
  );
};

export default ItemDetail;