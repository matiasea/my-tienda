
import React, {useState} from "react";

import "../ItemCount/itemCount.css"

const ItemCount = () => {
    const stockDisponible = 3;

    const [counter, setCounter] = useState(0)


    const onAdd = () => {
        if (counter < stockDisponible ) {            
        
        setCounter(counter + 1)
    }else{
        alert("disculpa, no tenemos mas que las que seleccionaste! :(")
    }
    };



    const onRemove = () => {
        if (counter > 0) {    
        
        setCounter(counter - 1)
    }else{
        alert("menos no podes restar che :P")
    }
    };



    return (
        <div className="itemCount">
        <button onClick={onAdd}>+</button>
        <p>{counter}</p>
        
        <button onClick={onRemove}>-</button>

        </div>


    )

};

export default ItemCount;