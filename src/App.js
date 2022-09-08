import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/ItemCount';
function App() {
  const stock = 10
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidx!' />  
      <Counter stock={stock}/>
    </div>
  );
}

export default App;
