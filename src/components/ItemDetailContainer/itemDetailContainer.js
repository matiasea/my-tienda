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
import ItemCount from "../ItemCount/itemCount";

const ItemDetailContainer = ({ data }) => {
const { AddToCart } = useContext(ItemsCartContext);

const agregarAlCarrito = () => {
  const detalle = { ...data };
  AddToCart(detalle);
};


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
      </CardContent>
      <CardMedia
        component="img"
        width="100"
        image={data.image}
        alt="electro"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
              ${data.price}
            </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.article}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={agregarAlCarrito}>AGREGAR AL CARRITO</Button>
        
      </CardActions>
      <ItemCount />

    
    </Card>
  );
};

export default ItemDetailContainer;
