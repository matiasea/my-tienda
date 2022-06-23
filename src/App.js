
import './App.css';
import Navigation from "./components/navigation/navigation";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <Navigation/>      
      <ItemListContainer/>
      <h1>Mi Tienda Digital</h1>
      <h3>Almada Matias - React</h3>
    </div>
  );
}

export default App;
