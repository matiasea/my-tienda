import React, { useState } from 'react';
import data from '../Data/data';
import ItemCategories from './itemCategories';


const FilterCategoriesTvAudioVideo = () => {
const Categories = data.filter(function(cate){
return cate.categoria === "TV, AUDIO Y VIDEO"; 
  
  })
console.log(Categories)

  /*   const [busq, setBusq] = useState ([Categories]);
  return (
        <div>
        {Categories.map(prod => {
            return <ItemCategories img={prod.img} articulo={prod.articulo} marca={prod.marca} precio={prod.precio} />
        } )}
    </div>
  ); */
};

export default FilterCategoriesTvAudioVideo;