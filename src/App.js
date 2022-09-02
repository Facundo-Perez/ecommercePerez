import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/itemListContainer/itemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidx!' />  
      <header className="App-header"></header>
    </div>
  );
}

export default App;
