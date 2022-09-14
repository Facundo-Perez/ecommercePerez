import './ItemDetail.css'

const ItemDetail = ({detalle}) => {
  
    return (
    <div className="ItemDetail">
        
        <h3>{detalle.price}</h3> 
        <img src={detalle.image} alt={detalle.title}/>
        <p>{detalle.detail}</p>   
        <h2>{detalle.title}</h2>
        
    </div>
  );
};

export default ItemDetail;