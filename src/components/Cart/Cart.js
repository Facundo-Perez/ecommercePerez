import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import moment from 'moment';
import Swal from "sweetalert2";
const Cart = () => {
  const {cart, removeProduct} = useContext(cartContext);
  console.log('cart', cart);

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
    Swal.fire(
      'Compra Realizada con Exito.',
      `Su numero de orden es ' ${id} ' `  ,
      'success'
    )
    })
    .catch((error) => 
     Swal.fire({
      icon: 'error',
      title: ' :( ',
      text: 'No se puedo realizar la orden.',
    })
    )
  }

    return (
    <div>
        <h2>Carrito</h2>
        
        <br></br>
        
        {cart.length === 0 ? (<div><h2>Carrito vacio</h2><Link to='/'><button>Volver a comprar</button></Link></div>): 
        
        cart.map((product) =>(
            <div key={product.id} >
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title}/>                 
                <p> $ {product.price}</p>
                <p>{product.cantidad}</p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar Producto</button>
            <div>
              <button onClick={createOrder}>Crear Orden</button>
            </div>
            </div>
         ))
            
        }
       
        
    </div>
  )
}

export default Cart