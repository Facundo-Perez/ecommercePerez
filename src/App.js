import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  
  return (
    
        <div className="App">
          <NavBar/>          
          <ItemListContainer/>
          <ItemDetailContainer/>     
        </div>
  );
}

export default App;
