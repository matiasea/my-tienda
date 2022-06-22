

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/itemCount";
import "./item.css"


export default function Item({data}) {
  return (
    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
            
          component="img"
          width="100"
          image={data.img}
          alt="electro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.articulo} {data.marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.descripcion1} {data.descripcion2}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            ${data.precio}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      
      <ItemCount/> 
      
    </Card>
  );
}
