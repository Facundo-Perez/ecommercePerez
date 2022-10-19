
import './Item.css'
const Item = ({title, price, image, detail,category}) => {

  return (
    <>
    <section className="orderCards">
     <div className="card">
  <div className="img">
    <img src={image} alt={title} />
  </div>
  <div className="card-text">
    
    <div className="price">${price}</div>
    <div className="tag">{category}</div>
    <div className="desc">{detail}</div>
    <div className="btn"><h2 >{title}</h2></div>
  </div>
  </div>
    </section>
    
    </>
  )
}

export default Item