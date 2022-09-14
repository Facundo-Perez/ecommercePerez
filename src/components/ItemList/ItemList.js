import Item from "../Item/Item"

const ItemList = ({lista}) => {
  
    return (
    <div>
        {
        lista.map((product)=>{
        return(
            <Item   
                key={product.id}
                title={product.title} 
                price={product.price} 
                image={product.image}
                detail={product.detail}
            />
            );
        })}
    </div>
  );
};

export default ItemList;