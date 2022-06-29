import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemDetailContainer = ({ data }) => {
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
        <Button size="small">AGREGAR AL CARRITO</Button>
        <Button size="small">AGREGAR A FAVORITOS</Button>
      </CardActions>
    </Card>
  );
};

export default ItemDetailContainer;
