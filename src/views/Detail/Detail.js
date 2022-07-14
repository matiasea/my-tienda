import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/itemDetailContainer";
import ItemCount from "../../components/ItemCount/itemCount";
import data from "../../components/Data/data";

//--------FIREBASE -------------------
import { db } from "../../firebase/fireBaseConfig";
import { collection, query, getDocs } from "firebase/firestore";


const Detail = () => {
const [ detailProduct, setDetailProduct ] = useState ([]);

let { id } = useParams();

const getProductos = async () => {
  const q = query(collection(db, "productos"));
  const stockDetalle = [];

  const querySnapshot = await getDocs(q);
  //console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    stockDetalle.push({ ...doc.data(), id: doc.id})
  });
  console.log(stockDetalle)
  setDetailProduct(stockDetalle)
};


useEffect (() => {
  getProductos();
  
}, [id]);

return (
    <div key={data.id}>
      <ItemDetailContainer data={detailProduct} />
    </div>
)

}

export default Detail;



/* const Detail = () => {
  const [detailProduct, setDetailProduct] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json().then((json) => setDetailProduct(json))
    );
    console.log(detailProduct);
  }, [id]);

  return (
    <div>
      <ItemDetailContainer data={detailProduct} />
    </div>
  );
};

export default Detail;
 */