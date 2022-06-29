import { ProductionQuantityLimitsSharp } from "@mui/icons-material";
import React from "react";
import Item from "../Item/item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </div>
  );
};

export default ItemList;
