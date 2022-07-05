import "./ItemListContainer.css";
import Item from "../Item/item";
import ItemDetailContainer from "../ItemDetailContainer/itemDetailContainer";
import data from "../Data/data";
import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(
      (res) => res.json().then((json) => setProductos(json)) 
    );
    console.log(productos);
  }, []);

  console.log(productos);

  return (
    <div className="itemListCont">
      <ItemList productos={productos} />
      
    </div>
  );
};

export default ItemListContainer;
