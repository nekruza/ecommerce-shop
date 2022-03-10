import React from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Container style={{display: 'flex', justifyContent: 'center', borderTop: '1px solid grey', maxWidth: '100vw', background: '#fec5bb'}}>
        <Grid container spacing={2} sx={{margin: 'auto', width: '100%' }} justifyContent="space-around">
            <Grid item spacign={2} xs={12} sm={4} style={{padding: '10px', margin: '0'}}>
                <h4>Services and Support</h4>
                <p>Contact us</p>
                <p>Delivery Info</p>
                <p>Returns Info</p>
            </Grid>
            <Grid item spacign={2} xs={12} sm={4}style={{padding: '10px', margin: '0'}}>
                <h4>Address:</h4>
                <p>241 Manchester Road</p>
                <p>London, UK</p>
                <p>E14 3DP</p>
            </Grid>
            <Grid item spacign={2} xs={12} sm={4}style={{padding: '10px', margin: '0'}}>
                <h4>Follow us:</h4>
                <InstagramIcon fontSize="large"/>
                <FacebookIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Footer