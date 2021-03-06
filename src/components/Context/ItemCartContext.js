import React, { createContext, useContext, useState } from "react";


export const ItemsCartContext = createContext();

export const CartContextFunction = () => {
  return useContext(ItemsCartContext);
};

const initialState = [];

export const ItemsCartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState(initialState);
  const [counter, setCounter] = useState(0);


  const IdProd = (id) => {
    const idEncontrado = itemsCart.find((product) => product.id === id);
    return idEncontrado === undefined ? false : true;
  };


  const AddToCart = (obj) => {
    if (!IdProd(obj.id)) {
      setItemsCart([...itemsCart, obj]);
    } else {
      itemsCart.forEach((product, index) => {
        if ([product.id === obj.id]) {
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

  const onAdd = () => {
    setCounter(counter + 1)
  }

  const onRemove = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }
  }


  const totalProd = () => {
    let total = 0;
    itemsCart.forEach(({ amount, precio }) => {
      total = total + amount * precio;
    });
    return total;
  };



  return (<ItemsCartContext.Provider value={{ itemsCart, IdProd, setItemsCart, AddToCart, ItemRemove, counter, onAdd, onRemove, totalProd }}>
    {children}
  </ItemsCartContext.Provider>
  );
}


