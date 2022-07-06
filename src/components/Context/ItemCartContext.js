import React, { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemsCartContext = createContext();

const initialState = [];

export const ItemsCartProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState(initialState);
    
    const IdProd = (id) => {
        const idEncontrado = itemsCart.find((product) => product.id === id);
        return idEncontrado === undefined ? false : true;
      };


      const AddToCart = (obj) => {
        if (!IdProd(obj.id)) {
          setItemsCart([...itemsCart, obj]);
        } else {
          itemsCart.forEach((product, index) => {
            if (product.id === obj.id) {
              itemsCart[index].amount = product.amount + obj.amount;
              setItemsCart([...itemsCart]);
            }
          });
        }
      };

    return (<ItemsCartContext.Provider value={{ itemsCart, setItemsCart, AddToCart }}>
        {children}
        </ItemsCartContext.Provider>
        );
}


