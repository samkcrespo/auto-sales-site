import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({product}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        // component="img"
        // alt={product.title}
        // height="140"
        // image={product.imageurl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product.year} {product.make} {product.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.mileage} Miles
        </Typography>
        <Typography variant="h5" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Contact Us</Button>
      </CardActions>
    </Card>
  );
}