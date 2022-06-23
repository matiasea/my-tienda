import "./ItemListContainer.css"
import Item from "../Item/item";
import ItemDetailContainer from "../ItemDetailContainer/itemDetailContainer";
import data from "../Data/data";
import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"


const ItemListContainer = () => {
     const [ detail, setDetail ] = useState ([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/matiasea/my-tienda/main/src/components/ItemDetailContainer/ItemDetailContainer.txt')
        .then(response => response.json())
        .then(json => setDetail(json))
  
        

    }, []); 
    return (
        <div className="itemList"> ItemListContainer
            {data.map((data) => (
                <Item key={data.id} data={data} />
                ))}
                
            {detail.map((detail) => (
                <ItemDetailContainer key={detail.id} detail={detail}/>
            ))}
        </div>
    )
}

export default ItemListContainer;