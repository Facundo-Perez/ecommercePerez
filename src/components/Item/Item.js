import { NavLink } from "react-router-dom"
import Counter from "../Counter/ItemCount"
import './Item.css'
const Item = ({title, price, image, detail,category}) => {
  const stock = 10
  return (
    <>
    <section className="orderCards">
     <div className="card">
  <div className="img">
    <img src={image} alt={title} />
  </div>
  <div className="card-text">
    <h2 >{title}</h2>
    <div className="price">${price}</div>
    <div className="tag">{category}</div>
    <div className="desc">{detail}</div>
    <Counter stock={stock}/>
    <NavLink className="btn">Añadir al carrito</NavLink>
  </div>
  </div>
    </section>
    
    </>
  )
}

export default Item