import "./App.css";
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";


//--------CONTEXT-------------------
import { ItemsCartProvider } from "./components/Context/ItemCartContext";


//--------COMPONENTS ----------------
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



//-------- VIEWS ---------------------
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import DatosDeEnvio from "./views/Postventa/datosDeEnvio";
import Detail from "./views/Detail/Detail";
import Cart from "./views/Carrito/Carrito";
import CategoryView from "./views/Category/CategoryView";
import RubroType from "./views/Home/RubroType";

 function App() {
  return (
    
    <BrowserRouter>
    <ItemsCartProvider>
      <Header />
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/DatosDeEnvio" element={<DatosDeEnvio />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart /> } />
          <Route path="/linea/:linea" element={<CategoryView /> } />
          <Route path="/rubro/:rubro" element={<RubroType /> } />
        </Routes>
        <ToastContainer />
      </div>
       
      </ItemsCartProvider>
      
      <Footer/>
    </BrowserRouter>
    
    
  );
}

export default App; 

