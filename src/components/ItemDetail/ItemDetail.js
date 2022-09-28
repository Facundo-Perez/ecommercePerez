import Counter from "../Counter/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import './ItemDetail.css';
import { Link } from "react-router-dom";

const ItemDetail = ({detalle}) => {
  const [items, setItems] = useState(1)
  const {addToCart} = useContext(cartContext)

const onAdd = ( detalle ,cantidad) => {

      addToCart(detalle , items);
    }

    return (
    <div className="ItemDetail">
        <img src={detalle.image} alt={detalle.title}/>
        <h2>{detalle.title}</h2>
        <Counter stock={detalle.cantidad} items={items} setItems={setItems}/>
        <button className="btnAddToCart" onClick={()=> onAdd( {detalle, items} )}>Agregar al carrito</button>
        <h3>${detalle.price}</h3>
        <p>{detalle.detail}</p>
      <Link to='/' > Volver</Link>
    </div>
  );
};

export default ItemDetail;