import React from "react";

//---------------------Componentes-----------
import Item from "../Item/item";

//-----------Estilos-------------------
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemsList2">
    <div className="itemList">
      {productos.map((producto) => {
        return (

        <Item key={producto.id} producto={producto} />
        );
      })}
    </div>
  </div>
  );
};

export default ItemList;
