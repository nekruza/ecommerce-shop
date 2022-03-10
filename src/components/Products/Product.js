import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from './Style'
import {Link} from "react-router-dom";
import useStore from '../Zustand';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Product = ({product}) => {
  const classes = useStyles()
  const addBasket = useStore(state => state.addBasket)
  const basket = useStore(state => state.basket)

  const buyButton = (id, name, brand, price, quantity, image) => {
    addBasket({'id': id, 'product': name, 'brand': brand, 'price': price, 'quantity': quantity, 'image': image})
    handleClick()
  } 
  // Alert message
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  console.log('basket--->', basket)

  return (
    <Card sx={{ maxWidth: 345 }} key={product.id}>
      <Link to={`/productpage/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              ${product.price}
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            {product.brand}
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button size="small" variant='contained' style={{background: '#2a9d8f'}} onClick={()=>buyButton(product.id, product.name, product.brand, product.price, product.quantity, product.image)}>Add to Basket</Button>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            Added to the basket!
          </Alert>
        </Snackbar>
      </CardActions>
    </Card>
  )
}

export default Product