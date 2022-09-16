
const ItemDetail = ({detalle}) => {
  
    return (
    <div className="ItemDetail">
        <img src={detalle.image} alt={detalle.title}/>
        <h2>{detalle.title}</h2>
        <h3>{detalle.price}</h3>
        <p>{detalle.detail}</p>                
    </div>
  );
};

export default ItemDetail;