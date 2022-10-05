import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import moment from 'moment';
const Cart = () => {
  const {cart, removeProduct} = useContext(cartContext);
  const createOrder = () =>{
    const db = getFirestore();
    const order = {
      buyer: {
        name:'user',
        phone: '12345',
        email: 'test@test.com',
      },
      items: cart,
      total: cart.reduce((prev , valorActual) => 
      prev + valorActual.price * valorActual.cantidad, 
      0),
      Date: moment().format()
    };
    const queryOrder = collection(db , 'orders');
    addDoc(queryOrder, order)
    .then(({id}) =>{
    console.log(id);
    alert('Compra realizada.');
    })
    .catch((error) => 
    alert('Error al realizar la compra, intente de nuevo mas tarde.'))
  }

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
       
        <div>
          <button onClick={createOrder}>Crear Orden</button>
        </div>
    </div>
  )
}

export default Cart