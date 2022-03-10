import React from 'react'
import Grid from '@mui/material/Grid';
import Product from './Product' 
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ProductList from '../ProductList'


const Products = () => {
  return (
    <Container style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography variant='h5'>Products</Typography>
        <Grid container spacing={4} sx={{backgroundColor: 'white', margin: 'auto', width: 'auto' }} justifyContent="space-around">
            {ProductList.map((product)=>
                <Grid item spacign={2} key={product.id} xs={12} sm={6} md={3} lg={3} style={{padding: '10px', margin: '0'}}>
                    <Product product={product}/>
                </Grid>
            )}
        </Grid>
    </Container>
  )
}

export default Products