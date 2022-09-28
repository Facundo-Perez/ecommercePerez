import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
const Cart = () => {
  const {cart, removeProduct} = useContext(cartContext);
    console.log('cart', cart)

    return (
    <div>
        <h2>Carrito</h2>
        <br></br>
        {cart.length === 0 ? (
        <div>
        <h2>Carrito vacio</h2>
        <Link to='/'><button>Volver a comprar</button></Link>
        </div>
        )
        :
        (
            <>
             {cart.map((product) =>(
            <div key={product.id} style={{display:'flex', direction:'column', alingItems:'center'}}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title}/> 
                <p>{product.price}</p>
                <p>{product.cantidad}</p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar Producto</button>
            </div>
         ))}
            </>
        )}
       
        
    </div>
  )
}

export default Cart