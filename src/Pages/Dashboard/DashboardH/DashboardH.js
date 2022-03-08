import { Grid } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import { FcSalesPerformance } from 'react-icons/fc';
import BookmarkBorderTwoToneIcon from '@mui/icons-material/BookmarkBorderTwoTone';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PinchOutlinedIcon from '@mui/icons-material/PinchOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { BsMinecart } from 'react-icons/bs';
import DoNotDisturbOnTotalSilenceOutlinedIcon from '@mui/icons-material/DoNotDisturbOnTotalSilenceOutlined';
import { GiMoneyStack } from 'react-icons/gi';
import { RiExchangeDollarFill } from 'react-icons/ri';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import useAuth from '../../../hook/useAuth';
import './DashboardH.css';



const DashboardH = () => {
    <meta name='viewport' content='width=device-width,initial-scale-1.0' />
    const {user} = useAuth();
    return (
        <Grid container spacing={2}>
            <h5 style={{color: '#303030', fontFamily:'"Verdana",serif', lineHeight: '1em', padding: '10px'}}>Hello {user.displayName} <br /><span style={{fontSize: '10px'}}>Welcome Back!</span></h5>
            
                    <Grid item xs={12} md={12} >
                    
                    <Grid container spacing={2} sx={{p: '40px'}}>
                        <Grid item xs={12} md={8} sx={{backgroundColor: '#ECC5C0', borderRadius: '20px'}}>
                            <Grid container spacing={2}>
                                    <Grid item xs={4} md={4}>
                                    <RemoveRedEyeOutlinedIcon style={{fontSize: '40px', marginBottom: '9px'}}/> <br />
                                    <p><span style={{fontWeight: 400, fontSize: '13px'}}>Views</span><br />
                                    <span style={{fontWeight: 800, fontSize: '25px'}}>500</span><br />
                                    <span style={{fontWeight: 400, fontSize: '13px'}}>Per Day</span></p>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                <PinchOutlinedIcon style={{fontSize: '40px', marginBottom: '9px'}}/> <br />
                                    <p><span style={{fontWeight: 400, fontSize: '13px'}}>Revenue</span><br />
                                    <span style={{fontWeight: 800, fontSize: '25px'}}>$9585</span><br />
                                    <span style={{fontWeight: 400, fontSize: '13px'}}>Per Year</span></p>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                <SupportAgentOutlinedIcon style={{fontSize: '40px', marginBottom: '9px'}}/> <br />
                                    <p><span style={{fontWeight: 400, fontSize: '13px'}}>Customers</span><br />
                                    <span style={{fontWeight: 800, fontSize: '25px'}}>854</span><br />
                                    <span style={{fontWeight: 400, fontSize: '13px'}}>Per Month</span></p>
                                </Grid>
                            </Grid>
                        </Grid>

                    
                    </Grid>


                    <Grid container spacing={2} sx={{ p: '20px', ml: '30px'}}>
                            <Grid item xs={12} md={8} >
                                <Grid container spacing={2}>
                                <Grid item xs={6} md={4} sx={{backgroundColor: '#DCD0FF', mr: '10px', borderRadius: '25px', textAlign: 'left'}}>
                                <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                <p><span style={{fontWeight: 800, fontSize: '20px'}}>Sales </span><br />
                                <span style={{fontSize: '12px'}}>Total Sales Today</span><br />
                                    <span style={{fontWeight: 800, fontSize: '20px'}}>$500</span></p>
                                    </Grid>
                                <Grid item xs={6} md={4}>
                                    <PointOfSaleOutlinedIcon style={{fontSize: '50px', marginTop: '10px'}}/>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} md={4} sx={{backgroundColor: '#EDE6D6', borderRadius:'25px', textAlign: 'left'}}> 
                                <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                    <p><span style={{fontWeight: 800, fontSize: '20px'}}>Profit </span><br />
                                    <span style={{fontSize: '12px'}}>Per Day Ratio</span><br />
                                    <span style={{fontWeight: 800, fontSize: '20px'}}>$150</span></p>
                                    </Grid>
                                <Grid item xs={6} md={4}>
                                    <FcSalesPerformance  style={{fontSize: '50px', marginTop: '10px'}}/>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ p: '20px', ml: '30px'}}>
                            <Grid item xs={12} md={8} >
                                <Grid container spacing={2}>
                                <Grid item xs={6} md={4} sx={{backgroundColor: '#FAF0E6', mr: '10px', borderRadius: '25px', textAlign: 'left'}}>
                                <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                <p><span style={{fontWeight: 800, fontSize: '20px'}}>Orders </span><br />
                                <span style={{fontSize: '12px'}}>Total Order Today</span><br />
                                <span style={{fontWeight: 800, fontSize: '20px'}}>1000</span></p>
                                    </Grid>
                                <Grid item xs={6} md={4}>
                                    <BookmarkBorderTwoToneIcon style={{fontSize: '50px', marginTop: '10px'}}/>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} md={4} sx={{backgroundColor: '#FFFFF0', borderRadius:'25px', textAlign: 'left'}}> 
                                <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                    <p><span style={{fontWeight: 800, fontSize: '20px'}}>Admins</span><br /><span style={{fontSize: '12px'}}>Total Admin</span><br />
                                    <span style={{fontWeight: 800, fontSize: '20px'}}>07</span></p>
                                    </Grid>
                                <Grid item xs={6} md={4}>
                                    <AdminPanelSettingsOutlinedIcon style={{fontSize: '50px', marginTop: '10px'}}/>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    </Grid>
                    
                    <Grid item xs={12} md={3} sx={{color: 'white'}}>
                        
                        <Grid item xs={12} md={12}>
                            <div className='dashhome'>
                                <Grid container spacing={2} sx={{p: '20px'}}>
                                    <Grid item xs={4} md={4}>
                                        <BsMinecart style={{marginTop: '15px', fontSize: '30px'}}/> 
                                    </Grid>
                                    <Grid item xs={8} md={8} >
                                    <p><span style={{fontWeight: 400, fontSize: '15px', lineHeight: '.1em'}}>Total Mined</span><br /><span style={{fontWeight: 800, fontSize: '20px'}}>$5,596</span></p>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <DoNotDisturbOnTotalSilenceOutlinedIcon style={{marginTop: '15px', fontSize: '30px'}}/> 
                                    </Grid>
                                    <Grid item xs={8} md={8} >
                                    <p><span style={{fontWeight: 400, fontSize: '15px', lineHeight: '.1em'}}>Total Net Worth</span><br /><span style={{fontWeight: 800, fontSize: '20px'}}>$62,592</span></p>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <GiMoneyStack style={{marginTop: '15px', fontSize: '30px'}}/> 
                                    </Grid>
                                    <Grid item xs={8} md={8} >
                                    <p><span style={{fontWeight: 400, fontSize: '15px', lineHeight: '.1em'}}>Total Earnings</span><br /><span style={{fontWeight: 800, fontSize: '20px'}}>$10,500</span></p>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <RiExchangeDollarFill style={{marginTop: '15px', fontSize: '25px'}}/> 
                                    </Grid>
                                    <Grid item xs={8} md={8} >
                                    <p><span style={{fontWeight: 400, fontSize: '15px', lineHeight: '.1em'}}>Harvested Losses</span><br /><span style={{fontWeight: 800, fontSize: '20px'}}>$0.00</span></p>
                                    </Grid>
                                </Grid>
                                <h5 style={{textAlign: 'left', marginTop: '17px'}}>Upcoming Payments</h5>
                                <p style={{textAlign: 'left', marginBottom: '37px'}}>14 Mar 2022</p>

                                <Grid container spacing={2} sx={{p: '0px', lineHeight: '1px'}}>
                                    <Grid item xs={7} md={7}>
                                    <p><span style={{fontWeight: 500, fontSize: '15px'}}>Occulus LMT. Company</span></p>  
                                    </Grid>
                                    <Grid item xs={5} md={5} >
                                    <p><span style={{fontWeight: 600, fontSize: '20px'}}>$820</span></p>
                                    </Grid>
                                    <Grid item xs={7} md={7}>
                                    <p><span style={{fontWeight: 500, fontSize: '15px'}}>Glass-Zone LMT.</span></p>  
                                    </Grid>
                                    <Grid item xs={5} md={5} >
                                    <p><span style={{fontWeight: 600, fontSize: '20px'}}>$596</span></p>
                                    </Grid>
                                </Grid>  
                            </div>   
                        </Grid>
                          
                    </Grid>
                    
        </Grid>
    );
};

export default DashboardH;