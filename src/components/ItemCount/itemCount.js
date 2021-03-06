
import React, {useContext} from "react";

import "../ItemCount/itemCount.css";
import { ItemsCartContext } from "../Context/ItemCartContext";





const ItemCount = () => {
    const {counter, onAdd, onRemove} = useContext(ItemsCartContext)
  /*   const stockDisponible = 3;
    const [counter, setCounter] = useState(1)
    const onAdd = () => {
        if (counter < stockDisponible ) {    
        setCounter(counter + 1)
    }else{
        alert("disculpa, no tenemos mas que las que seleccionaste! :(")
    }
    };

    const onRemove = () => {
        if (counter > 1) {    
        
        setCounter(counter - 1)
    }else{
        alert("menos no podes restar che :P")
    }
    };

 */

    return (
        <div className="itemCount">
        <button onClick={onAdd} type="button" class="btn btn-dark" >+</button>
        <p>{counter}</p>
        <button onClick={onRemove} type="button" class="btn btn-dark" >-</button>
        </div>



    )

};

export default ItemCount;
