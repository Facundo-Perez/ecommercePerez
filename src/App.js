import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  
  return (
    <BrowserRouter>
      <NavBar/> 
        <Routes>
        
                  
         <Route path='/' element= {<ItemListContainer/>}/>
         <Route path='store' element={<h2>Aqui va la tienda completa</h2>}/>
         <Route path='detail/:id' element= {<ItemDetailContainer/>}/>
         <Route path='about' element={<h2>Acerca de Nosotros</h2>}/>
         <Route path='signin' element={<h2>Iniciar sesion</h2>}/>      
         <Route path='category/:category' element={<ItemListContainer/>}></Route>
    
       </Routes>
    </BrowserRouter>
  );
}

export default App;
