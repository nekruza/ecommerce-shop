import React, {useEffect} from 'react';
import useStore from '../Zustand';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const Basket = () => {
    const basket = useStore(state=>state.basket)
    const deleteItem = useStore(state=>state.deleteItem)
    const increaseQuantity = useStore(state=>state.increaseQuantity)
    
    console.log('basket--->', basket)

    const incQuantity = (ref) => {
      increaseQuantity(ref)
      console.log(ref)
    }
    
    // Total Basket Cost 
    const sum = basket.map((key) =>  Number(key.price))
    const amount = sum.reduce((a, b) => a + b, 0)


    return (
      <TableContainer component={Paper} sx={{padding: "20px", boxSizing: 'border-box', marginTop: '85px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <CardMedia
                    component="img"
                    height="140"
                    image={row.image}
                    alt="green iguana"
                    style={{width: '50%'}}
                  />
                </TableCell>
                <TableCell align="right">{row.product}</TableCell>
                <TableCell align="right">{row.brand}</TableCell>
                <TableCell align="right">£{row.price}</TableCell>
                <TableCell align="right">{row.quantity} <button onClick={()=> incQuantity(row.id)}>+</button> <button>-</button></TableCell>
                <TableCell align="right"><button onClick={()=>deleteItem(row.id)}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> 
        <h2>Total Products: {basket.length}</h2>
        <h2>Total Cost: {amount}</h2>
        <Button variant="outlined">Confirm your order</Button>

      </TableContainer>
    );
}

export default Basket