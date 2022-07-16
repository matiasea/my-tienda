import React, {useContext} from 'react'

//-------Context---------------
import { ItemsCartContext } from '../Context/ItemCartContext';


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//COMPONENTS -----------------------------
import TerminarCompraButton from '../Cart/TerminarCompraButton';

const ItemDetailContainer = ({ data }) => {
const { itemsCart, AddToCart } = useContext(ItemsCartContext);


const agregarAlCarrito = () => {
  const detalle = { ...data };
  AddToCart(detalle);
};


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
              {data.articulo}
            </Typography>
      </CardContent>
      <CardMedia
        component="img"
        width="100"
        image={data.img}
        alt="electro"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
              ${data.precio}
            </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.article}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.detalle3}
        </Typography>
      </CardContent>
      <CardActions>
        <Button type="button" class="btn btn-dark" size="small" onClick={agregarAlCarrito}>AGREGAR AL CARRITO</Button>
        {itemsCart.length > 0 ? (<TerminarCompraButton />) : null}
        
      </CardActions>


    
    </Card>
  );
};

export default ItemDetailContainer;
