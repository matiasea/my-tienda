import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/itemCount";



const ItemCategories = ({props}) => {
  return (
    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
            
          component="img"
          width="100"
          image={props.img}
          alt="electro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.articulo} {props.marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descripcion1} {props.descripcion2}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            ${props.precio}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      
      <ItemCount/> 
      
    </Card>
  );
};

export default ItemCategories;