import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/itemDetailContainer";

//--------FIREBASE -------------------
import { db } from "../../firebase/fireBaseConfig";
import { collection, query, getDocs, documentId, where } from "firebase/firestore";


const CategoryView = () => {
const [ detailProduct, setDetailProduct ] = useState ([]);

const  {linea}  = useParams();

useEffect (() => {
const getDetail = async () => {
  const q = query(collection(db, "productos"), where ("linea", "==", linea));
  const stockDetalle = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    stockDetalle.push({ ...doc.data(), id: doc.id})
  });
  console.log(stockDetalle)
  setDetailProduct(stockDetalle)
};
  getDetail();
  
}, [linea]);

return (
    <div>
      {detailProduct.map ((data) => {
        return <ItemDetailContainer data={data} />
      })}
    </div>
)

}

export default CategoryView;
