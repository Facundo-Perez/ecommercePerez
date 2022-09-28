
const Counter = ({stock, items , setItems}) => {

    
    
    const sumar = () => items <= stock -1 ? setItems(items + 1) : alert('No se puede superar el maximo de stock')
    const restar = () => items > 0 ? setItems(items -1) : alert('No es posible quitar mas productos.')
  return (
    <>
    <div>{items}</div>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    </>
  )
}

export default Counter