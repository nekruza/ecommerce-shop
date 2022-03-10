import React from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import {Cleaning} from './CategData'
import {Deodarant} from './CategData'
import {Gifts} from './CategData'
import ProductList from '../ProductList'
import {Link, useParams, useLocation} from 'react-router-dom'
import Product from '../Products/Product'
import Breadcrumbs from '@mui/material/Breadcrumbs';


const ProductsByCateg = () => {
    const location = useLocation()
    const {name} = useParams()

    console.log('ProductList--->',ProductList)
    
    
    return (
    <>
    <Breadcrumbs aria-label="breadcrumb" style={{width: '95%', margin: '85px auto 20px', padding: '10px'}}>
        <Link to="/" style={{textDecoration: 'none', color: '#fec89a'}}>
          Home
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
    <Container style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0px auto'}}>
        <Typography variant='h5'>{name}</Typography>
        <Grid container spacing={4} sx={{backgroundColor: 'white', margin: '10px auto', width: '100%' }} justifyContent="space-around">
            {location.pathname === '/Allproducts' && ProductList.map((product)=>
                <Grid item spacign={2} key={product.id} xs={12} sm={6} md={3} lg={3} style={{padding: '10px', margin: '0'}}>
                    <Product product={product}/>
                </Grid>
            )}
            {location.pathname === '/Cleaning' && Cleaning.map((product)=>
                <Grid item spacign={2} key={product.id} xs={12} sm={6} md={3} lg={3} style={{padding: '10px', margin: '0'}}>
                    <Product product={product}/>
                </Grid>
            )}
            {location.pathname === '/Deodarant' && Deodarant.map((product)=>
                <Grid item spacign={2} key={product.id} xs={12} sm={6} md={3} lg={3} style={{padding: '10px', margin: '0'}}>
                    <Product product={product} route="/Deodarant"/>
                </Grid>
            )}
            {location.pathname === '/Gifts' && Gifts.map((product)=>
                <Grid item spacign={2} key={product.id} xs={12} sm={6} md={3} lg={3} style={{padding: '10px', margin: '0'}}>
                    <Product product={product} route="/Gifts"/>
                </Grid>
            )}
        </Grid>
    </Container>
    </>
    )
}

export default ProductsByCateg