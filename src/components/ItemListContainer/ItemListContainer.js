import "./ItemListContainer.css";
import Item from "../Item/item";
import ItemDetailContainer from "../ItemDetailContainer/itemDetailContainer";
import data from "../Data/data";
import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemList from "../ItemList/ItemList";

//--------FIREBASE -------------------
import { db } from "../../firebase/fireBaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [ productos, setProductos ] = useState ([]);

  const getProductos = async () => {
    const q = query(collection(db, "productos"));
    const stock = [];

    const querySnapshot = await getDocs(q);
    //console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      stock.push({ ...doc.data(), id: doc.id})
    });
    setProductos(stock)
  };
  

  useEffect (() => {
    getProductos();
    
  }, []);
  
  return (
    <div>
      <div className="itemListCont">
      <ItemList productos={productos} />
      
    </div>
    </div>
  )
  
}
export default ItemListContainer;

/* const ItemListContainer = () => {
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
 */