import React, { useState } from 'react';
import data from '../Data/data';
import ItemCategories from './itemCategories';



const FilterCategoriesElectrohogar = () => {
const Categories = data.filter(function(cate){
return cate.categoria === "ELECTROHOGAR"; 
  
  },[])
console.log(Categories)
{Categories.map((Categories) => {
  return (<div> hola
    </div>)
} )}

  /*   const [busq, setBusq] = useState ([Categories]);
  return (
        <div>
        {Categories.map(prod => {
            return <ItemCategories img={prod.img} articulo={prod.articulo} marca={prod.marca} precio={prod.precio} />
        } )}
    </div>
  ); */
};

export default FilterCategoriesElectrohogar;

