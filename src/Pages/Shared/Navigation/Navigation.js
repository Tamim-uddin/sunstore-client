import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { GiSunglasses } from 'react-icons/gi';
import { BsSunglasses} from 'react-icons/bs';



const Navigation = () => {
  const {user, logout} = useAuth();
  const userPhoto = user?.photoURL;
    return (
        <div>
             <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: '#F5F5F5', color: '#614051'}}>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Comic Sans MS', fontSize: '25px', textAlign:'left' }}>
           Sunstore<BsSunglasses fontSize={40}/>
          </Typography>
          
          {user?.email ?
          <Box>
            <NavLink to="/dashboard"><Button  sx={{textDecoration: 'underline', textDecorationColor: 'white', color: '#614051'}}>Dashboard</Button></NavLink>
           <Button  onClick={logout} color="inherit">LogOut</Button>
           
                        <img style={{height: '40px', width: '40px' , borderRadius: '20px',marginLeft: '10px'}} src= {userPhoto} alt='user'/>
            
          </Box> :
          <NavLink  to="/login"><Button sx={{textDecoration: 'underline', textDecorationColor: 'white', color: 'black'}} color="inherit">Login</Button></NavLink>}
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Navigation;