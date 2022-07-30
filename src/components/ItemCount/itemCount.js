
import React, {useContext} from "react";

import "../ItemCount/itemCount.css";
import { ItemsCartContext } from "../Context/ItemCartContext";





const ItemCount = () => {
    const {counter, onAdd, onRemove} = useContext(ItemsCartContext)
      return (
        <div className="itemCount">
        <button onClick={onAdd} className="btnAdd" >+</button>
        <p>{counter}</p>
        <button onClick={onRemove} className="btnRemove" >-</button>
        </div>



    )

};

export default ItemCount;
