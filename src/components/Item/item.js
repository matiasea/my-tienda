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
      <Card sx={{ maxWidth: 250 }} className="item" >
        <CardActionArea>
          <CardMedia
            component="img"
            width="100"
            image={producto.img}
            alt="electro"
          />
          <CardContent className="item">
            <Typography 
            gutterBottom 
            variant="h5" 
            color={"(37, 36, 36)"} 
            component="div" 
            fontWeight="bold"
            fontFamily={"Lucida Sans Regular"}>
              {producto.articulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.detalle1} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.detalle2}
            </Typography>
            <Typography gutterBottom 
            variant="h5" 
            component="div"
            color={"(37, 36, 36)"} 
            fontWeight="bold"
            fontFamily={"Lucida Sans Regular"}
            >
              ${producto.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Item;
