import React, { useContext } from 'react'

//-------Context---------------
import { ItemsCartContext } from '../Context/ItemCartContext';

//-------------Mui-------------
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//COMPONENTS -----------------------------
import VerCarrito from '../Cart/VerCarrito';
import ItemCount from '../ItemCount/itemCount';

//-------Estilos--------------
import "./itemDetail.css"



const ItemDetailContainer = ({ data }) => {
  const { counter, itemsCart, AddToCart, ItemRemove } = useContext(ItemsCartContext);


  const agregarAlCarrito = () => {
    const detalle = { ...data, amount: counter };
    AddToCart(detalle);
  };


  return (
    <Card sx={{ maxWidth: 1000 }} className='detail2'>
      <div>
      <CardMedia
        component="img"
        width="400"
        image={data.img}
        alt="electro"
      />
      </div>
      <div>
      <CardContent >
        <Typography gutterBottom 
        variant="h5" 
        component="div"
        text-decoration={"none"}
        fontWeight="bold"
        fontFamily={"Lucida Sans Regular"}
        >
          {data.articulo}
        </Typography>
      </CardContent>
      
      
      <CardContent>
        <Typography gutterBottom 
        variant="h4" 
        color={"grey"}
        component="div"
        text-decoration={"none"}
        fontWeight="bold"
        fontFamily={"Lucida Sans Regular"}
        >
          ${data.precio}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.article}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.detalle3}
        </Typography>
      </CardContent>
      </div>
      <div className='detail'>
      <ItemCount />
      <CardActions className='detail3' >
      <button 
      className="btnEnviar"
      onClick={agregarAlCarrito} 
      >
        Agregar al Carrito
        </button>
        <VerCarrito />
      </CardActions>
      </div>
    </Card>
  );
};

export default ItemDetailContainer;
