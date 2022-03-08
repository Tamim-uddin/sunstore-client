import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hook/useAuth';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, user} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{textAlign: 'left', marginLeft: '10px'}}>
      <Toolbar />
      
      <Link style={{textDecoration: 'none', color: '#614051'}} to="/home"><Button color='inherit' sx={{fontSize: '15px' ,fontFamily: 'Bahnschrift', fontWeight: '600px', marginTop: '50px'}}><HomeOutlinedIcon  sx={{mr: '30px'}}/>Home</Button></Link> <br />
      <Link style={{textDecoration: 'none', color: '#614051'}} to={`/dashboard`}><Button sx={{fontSize: '15px', fontFamily: 'Bahnschrift'}} color='inherit'><DashboardCustomizeOutlinedIcon sx={{mr: '30px'}}/>Dashboard</Button></Link><br />

      
      <Link style={{textDecoration: 'none', color: '#614051'}} to={`/dashboard/myorders`}><Button sx={{fontSize: '15px', fontFamily: 'Bahnschrift'}} color='inherit'><BookmarkBorderOutlinedIcon sx={{mr: '30px'}}/>My Orders</Button></Link><br />
      {admin && 
        <Box>
            <Link style={{textDecoration: 'none', color: '#614051'}} to={`/dashboard/addproduct`}><Button sx={{fontSize: '15px', fontFamily: 'Bahnschrift'}} color='inherit'><AddBoxOutlinedIcon sx={{mr: '30px'}}/>Add Product</Button></Link><br />
            <Link style={{textDecoration: 'none', color: '#614051'}} to={`/dashboard/manageallorders`}><Button sx={{fontSize: '15px', fontFamily: 'Bahnschrift'}} color='inherit'><ManageAccountsOutlinedIcon sx={{mr: '30px'}}/>Manage Orders</Button></Link>
            <Link style={{textDecoration: 'none', color: '#614051'}} to={`/dashboard/makeadmin`}><Button sx={{fontSize: '15px', fontFamily: 'Bahnschrift'}} color='inherit'><PersonAddAltOutlinedIcon sx={{mr: '30px'}}/>Make admin</Button></Link> <br />
        </Box>
      }
     
      <Link style={{textDecoration: 'none', color: '#614051'}} to={`/dashboard/addreview`}><Button sx={{fontSize: '15px', fontFamily: 'Bahnschrift'}} color='inherit'><AddCommentOutlinedIcon sx={{mr: '30px'}}/>Add Review</Button></Link><br />
    
      
     
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor: '#F0FFF0'
        }}
      >
        
       
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color: '#614051', fontFamily: 'Comic Sans MS', fontSize: '25px'}}>
            Dashboard
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Outlet />
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
