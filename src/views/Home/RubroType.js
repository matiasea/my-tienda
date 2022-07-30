import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/Item/item";

//--------FIREBASE -------------------
import { db } from "../../firebase/fireBaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

//----------ESTILOS-----------------
import "../Category/Category.css"



const RubroType = () => {
const [ detailProduct, setDetailProduct ] = useState ([]);

const  {rubro}  = useParams();

useEffect (() => {
const getDetail = async () => {
  const q = query(collection(db, "productos"), where ("rubro", "==", rubro));
  const stockDetalle = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    stockDetalle.push({ ...doc.data(), id: doc.id})
  });
  setDetailProduct(stockDetalle)
};
  getDetail();
  
}, [rubro]);

return (
    <div className="category">
      {detailProduct.map ((producto) => {
        return <Item key={producto.id} producto={producto} />
      })}
    </div>
)

}

export default RubroType;