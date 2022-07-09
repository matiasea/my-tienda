import React, { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemsCartContext = createContext();

export const CartContextFunction = () => {
  return useContext(ItemsCartContext);
};

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

      const ItemRemove = (id) => {
        const eliminarItem = itemsCart.filter((product) => product.id !== id);
        setItemsCart(eliminarItem);
        };

    return (<ItemsCartContext.Provider value={{ itemsCart, IdProd, setItemsCart, AddToCart, ItemRemove }}>
        {children}
        </ItemsCartContext.Provider>
        );
}


