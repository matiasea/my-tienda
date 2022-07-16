import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={`/detail/${producto.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="100"
            image={producto.img}
            alt="electro"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.articulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.detalle1} {producto.detalle2}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              ${producto.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Item;
