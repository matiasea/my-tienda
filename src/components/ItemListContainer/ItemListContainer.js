import "./ItemListContainer.css"
import Item from "../Item/item";
import data from "../Data/data";
//import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"


const ItemListContainer = () => {
 /*    const [ items, setItems ] = useState ([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(json => setItems(json))
        

    }, []); */
    return (
        <div className="itemList"> ItemListContainer
            {data.map((data) => (
                <Item key={data.id} data={data} />
            ))}
        </div>
    )
}

export default ItemListContainer;