import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import {CategData} from './CategData'
import {Link} from 'react-router-dom'



const Categories = () => {
  return (
    <>
    <Container style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '10px auto 0px'}}>
        <Typography variant='h5'>Category</Typography>
        <Grid container spacing={4} sx={{backgroundColor: 'white', margin: '10px auto', display: 'flex', flexDirection: 'column', overflowX: 'scroll', overflowY: 'hidden', height: '250px', width: '100%' }} justifyContent="space-around">
            {CategData.map((category)=>
                <Grid item spacign={2} key={category.id} xs={6} sm={3} md={2} lg={2} style={{padding: '10px', margin: '0'}}>
                    <Link to={`${category.name}`} style={{textDecoration: 'none', color: 'black'}}>
                        <CardMedia
                            component="img"
                            height="110"
                            image={category.image}
                            alt="green iguana"
                            style={{margin: 'auto', width: '100%', height: 'fit-content', borderRadius: '100%',}}
                        />
                        <Typography variant='subtitle1' style={{margin: '10px 0px', textAlign: 'center', fontWeight: 'bold'}}>
                            {category.name}
                        </Typography>
                    </Link>
                </Grid>
            )}
        </Grid>
    </Container>
    </>  
  )
}

export default 
Categories