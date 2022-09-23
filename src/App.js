import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './context/CartProvider'
function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar/> 
        <Routes>
        
                  
         <Route path='/' element= {<ItemListContainer/>}/>
         <Route path='store' element={<h2>Aqui va la tienda completa</h2>}/>
         <Route path='detail/:id' element= {<ItemDetailContainer/>}/>
         <Route path='about' element={<h2>Acerca de Nosotros</h2>}/>
         <Route path='signin' element={<h2>Iniciar sesion</h2>}/>      
         <Route path='category/:category' element={<ItemListContainer/>}></Route>
         <Route path='cart' element={<h2>Este es tu carrito de compras</h2>}></Route>
       </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
