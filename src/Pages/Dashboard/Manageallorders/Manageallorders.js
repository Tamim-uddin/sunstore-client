import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Manageallorder from '../Manageallorder/Manageallorder';

const Manageallorders = () => {
 const [allbookings, setallbookings] = useState([]); 
 useEffect( () => {
     fetch('https://stark-gorge-54734.herokuapp.com/bookings/admin')
     .then(res => res.json())
     .then(data => setallbookings(data) )
 } , [])  
    return (
        <>
            <h2 style={{fontFamily:'"Playfair Display",serif', color:'#303030'}}>My Orders {allbookings.length}</h2>
            <Grid container spacing={1}>
            {
                allbookings.map(allbooking => <Manageallorder key={allbooking._id} allbooking={allbooking} setallbookings={setallbookings} allbookings={allbookings}></Manageallorder>)
            }
            </Grid>
            </>
    );
};

export default Manageallorders;