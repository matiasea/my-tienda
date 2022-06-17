
import './App.css';
import Navigation from "./components/navigation/navigation";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/itemCount";



function App() {
  return (
    <div className="App">
      <Navigation/>      
      <ItemListContainer nombre="Matias Almada"/>
      <ItemCount/>
      
      <h1>Mi Tienda Digital</h1>
      <h3>Almada Matias - React</h3>
    </div>
  );
}

export default App;
