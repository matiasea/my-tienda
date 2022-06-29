import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "../ItemCount/itemCount";
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
            image={producto.image}
            alt="electro"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.descripcion1} {producto.descripcion2}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              ${producto.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Item;
