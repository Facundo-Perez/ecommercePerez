import Counter from "../Counter/ItemCount"

const Item = ({title, price, image, detail}) => {
  const stock = 10
  return (
    <>
    <img width={'200px'} src={image} alt={title}/>
    <h2>{title}</h2>
    <Counter stock={stock}/>
    <h3>${price}</h3>
    <p>{detail}</p>
    
    </>
  )
}

export default Item