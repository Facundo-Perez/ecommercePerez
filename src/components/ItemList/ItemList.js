import Item from "../Item/Item"
import { NavLink } from "react-router-dom";
import '../Item/Item.css'
const ItemList = ({lista}) => {
    return (
        <div className="orderCards">
         {lista.map((product)=>(
            <NavLink
            key={product.id}
            to={'/detail/' + product.id}
            style={{textDecoration:'none'}}>
            <Item   
                title={product.title}
                image={product.image} 
                price={product.price}
                category={product.category}             
            />
            </NavLink>
        ))}
    </div>
  );
};

export default ItemList;