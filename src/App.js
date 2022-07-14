import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
//--------FIREBASE -------------------
import { db } from "./firebase/fireBaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

//--------CONTEXT-------------------
import { ItemsCartProvider } from "./components/Context/ItemCartContext";


//--------COMPONENTS ----------------
import Header from "./components/Header/Header";
import NavCategories from "./components/Categories/navCategories";
import FilterCategoriesElectrohogar from "./components/Categories/categoriesElectrohogar";
import FilterCategoriesPequeElectro from "./components/Categories/categoriesPequenosElectro";
import FilterCategoriesTvAudioVideo from "./components/Categories/categoriesTvAudioVideo";

//-------- VIEWS ---------------------
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Product from "./views/Product/Product";
import Postventa from "./views/Postventa/Postventa";
import Detail from "./views/Detail/Detail";
import Cart from "./views/Carrito/Carrito";
import ItemsCart from "./components/Cart/Cart";


 function App() {
  return (
    
    <BrowserRouter>
    <ItemsCartProvider>
      <Header />
      <NavCategories />
      <FilterCategoriesElectrohogar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Postventa" element={<Postventa />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart /> } />
        </Routes>
      </div>
       
      </ItemsCartProvider>
    </BrowserRouter>
    
  );
}

export default App; 

