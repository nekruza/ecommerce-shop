import React from 'react';
import {Box, Grid, CardMedia, Button} from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link, useParams} from 'react-router-dom';
import ProductList from '../ProductList'
import useStore from '../Zustand';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export const ProductPage = ({product}) => {
  const addBasket = useStore(state => state.addBasket)
  
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const {id} = useParams();

  const productDetails = ProductList.filter(lesson=> lesson.id === Number(id))
  
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{width: '95%', margin: '85px auto 20px', padding: '10px'}}>
        <Link to="/" style={{textDecoration: 'none', color: '#fec89a'}}>
          Home
        </Link>
        <Link to="/Cleaning" style={{textDecoration: 'none', color: '#fec89a'}}>
          Categories
        </Link>
        <Typography color="text.primary">{productDetails[0].name}</Typography>
      </Breadcrumbs>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', marginTop: '20px'}} xs={10}>
          <Grid container spacing={2} justifyContent='center' sx={{height: '70vh'}}>
              <Grid item xs={12} sm={5} sx={{display: 'flex', height: '80%'}}>
              <CardMedia
                      component="img"
                      height="140"
                      image={productDetails[0].image}
                      alt="green iguana"
                      style={{margin: 'auto', width: '80%', height: 'fit-content'}}
                    />
              </Grid>
              <Grid item xs={12} sm={5} sx={{height: '80%'}}>
                  <h1 style={{lineHeight: "2rem", fontSize: '24px', fontFamily: "Als-Hauss-Bold", marginBottom: '12px'}}>
                      {productDetails[0].name}
                  </h1>
                  <p style={{color: 'grey', borderBottom: '20px'}}>Item Code: {productDetails[0].id}</p>
                  <hr />
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <div>
                        <span style={{color: 'grey', fontSize: '14px'}}>Price</span>
                        <p style={{color: 'grey', fontSize: '24px', marginTop: '5px'}}>£{productDetails[0].price}</p>
                    </div>
                    <div style={{marginLeft: '48px'}}>
                        <span style={{color: 'grey', fontSize: '14px'}}>Installment</span>
                        <p style={{color: 'grey', fontSize: '24px', marginTop: '5px'}}>£{Number(productDetails[0].price/3).toFixed(2)} x3</p>
                    </div>
                  </div>
                  <Button variant='contained' style={{marginBottom: '32px', width: '32px', background: '#2a9d8f'}} onClick={()=>buyButton(productDetails[0].id, productDetails[0].name, productDetails[0].brand, productDetails[0].price, productDetails[0].quantity, productDetails[0].image)}>Buy</Button>
                  <p>Description</p>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione ea cumque at rerum unde animi illo odio mollitia tempore, ex iusto quis dolorum culpa obcaecati error consectetur. Asperiores, architecto!
                  </div>
              </Grid>
          </Grid>  

          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
              Added to the basket!
            </Alert>
          </Snackbar>
          
          <Box sx={{ width: '85%', margin: 'auto', minHeight: '50px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Installment" {...a11yProps(0)} />
                <Tab label="Description" {...a11yProps(1)} />
                <Tab label="Delivery" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="left">Months</TableCell>
                      <TableCell align="left">Monthly Payment</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell align="left">£{productDetails[0].price}</TableCell>
                        <TableCell align="left"> 12</TableCell>
                        <TableCell align="left">£{Number(productDetails[0].price/12).toFixed(2)}</TableCell>
                        <TableCell align="left"><Button variant='contained' style={{background: '#2a9d8f'}}>Buy</Button></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">£{productDetails[0].price}</TableCell>
                        <TableCell align="left"> 6</TableCell>
                        <TableCell align="left">£{Number(productDetails[0].price/6).toFixed(2)}</TableCell>
                        <TableCell align="left"><Button variant='contained' style={{background: '#2a9d8f'}}>Buy</Button></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">£{productDetails[0].price}</TableCell>
                        <TableCell align="left"> 4</TableCell>
                        <TableCell align="left">£{Number(productDetails[0].price/4).toFixed(2)}</TableCell>
                        <TableCell align="left"><Button variant='contained' style={{background: '#2a9d8f'}}>Buy</Button></TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer> 
            </TabPanel>
            <TabPanel value={value} index={1}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione ea cumque at rerum unde animi illo odio mollitia tempore, ex iusto quis dolorum culpa obcaecati error consectetur. Asperiores, architecto!</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
              7-days free delivery!
            </TabPanel>
          </Box> 
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
