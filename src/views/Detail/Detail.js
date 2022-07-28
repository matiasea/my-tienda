import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/itemDetailContainer";

//--------FIREBASE -------------------
import { db } from "../../firebase/fireBaseConfig";
import { collection, query, getDocs, documentId, where } from "firebase/firestore";


//--------COMPONENTS----------------
import Spinner from "../../components/Spinner/Spinner";

const Detail = () => {
const [ detailProduct, setDetailProduct ] = useState ([]);
const [ waiting, setWaiting] = useState (true)

const  {id}  = useParams();

useEffect (() => {
const getDetail = async () => {
  const q = query(collection(db, "productos"), where (documentId(), "==", id));
  const stockDetalle = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    stockDetalle.push({ ...doc.data(), id: doc.id})
  });
  setDetailProduct(stockDetalle)
};
  getDetail();
  
  setTimeout( () => {
    setWaiting(false);
  }, 400);
  
}, [id]);

return (
    <div>
      {waiting ? (
        <div>
          <Spinner/>
        </div>
      ) : (
      detailProduct.map ((data) => {
        return <ItemDetailContainer data={data} key={data.id} />
      })
      )
      }
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