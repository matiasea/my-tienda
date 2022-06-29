import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/itemDetailContainer";
import ItemCount from "../../components/ItemCount/itemCount";
import data from "../../components/Data/data";

const Detail = () => {
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
