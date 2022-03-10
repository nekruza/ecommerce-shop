import { Container } from '@mui/material';
import React from 'react'
// import bannerImage from './banner.png'
import iphonebanner from './iphone-bunner.png'

const Banner = () => {
  return (
    <div>
        <Container style={{width: '100vw', height: '45vh', display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '25px' }}>
            <img src={iphonebanner} alt="" style={{height: '100%', width: '100%', position: 'relative' }}/>
        </Container>
    </div>
  )
}

export default Banner