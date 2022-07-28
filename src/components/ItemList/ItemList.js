import React from "react";
import Item from "../Item/item";
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
