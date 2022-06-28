
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

//--------COMPONENTS ----------------
import Header from './components/Header/Header';
import Navigation from "./components/navigation/navigation";
import NavCategories from './components/Categories/navCategories';
import FilterCategoriesElectrohogar from './components/Categories/categoriesElectrohogar';
import FilterCategoriesPequeElectro from './components/Categories/categoriesPequenosElectro';
import FilterCategoriesTvAudioVideo from './components/Categories/categoriesTvAudioVideo';

//-------- VIEWS ---------------------
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import Product from "./views/Product/Product"
import Postventa from "./views/Postventa/Postventa"
import Detail from "./views/Detail/Detail"





function App() {
  return (
    <BrowserRouter>  
    <Header/>     
    <Navigation/> 
    <NavCategories />
    <FilterCategoriesElectrohogar/>
     

      <div className="App">            
        <Routes> 
          <Route path="/" element={<Home />}/> 
          <Route path="/Product" element={<Product />}/> 
          <Route path="/Postventa" element={<Postventa />}/>
          <Route path="/Contact" element={<Contact />}/> 
          <Route path="/Detail/:id" element={<Detail />}/> 
          
        </Routes>
        <h1>Mi Tienda Digital</h1>
        <h3>Almada Matias - React</h3>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
