import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ItemDetailContainer({ detail }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={detail.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {detail.articulo} {detail.marca}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {detail.descripcion3}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">AGREGAR AL CARRITO</Button>
        <Button size="small">AGREGAR A FAVORITOS</Button>
      </CardActions>
    </Card>
  );
}
