import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/itemDetailContainer";
import ItemCount from "../../components/ItemCount/itemCount";
import data from "../../components/Data/data";


const Detail = () => {
    const [detailProduct, setDetailProduct] = useState ([]);    
    
    let {id} = useParams();

    useEffect (() => {
        axios(`https://raw.githubusercontent.com/matiasea/my-tienda/main/src/components/ItemDetailContainer/ItemDetailContainer.txt/${id}`)
        .then((res) => setDetailProduct(res.data)
        );
    }, [id]);
    

    return(
    <div>
        {detailProduct.map((detail) => {
            <div key={data.id}>
            return <ItemDetailContainer data={detail} />
            </div>
        })}
    </div>)
};

export default Detail;