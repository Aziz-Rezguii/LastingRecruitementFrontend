import React, { useState, useEffect } from "react";
import NavbarDisabled from './NavbarDisabled'
import FooterDisabled from './FooterDisabled'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

const AfterSubmit = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const navigate = useNavigate();

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    return (
        <div className='AfterSubmit' id='AfterSubmit'>
            <div className='container'>
                <div>
                <NavbarDisabled />
                <Box sx={{ width: '100%',paddingTop:30,paddingRight:'%50' }}></Box>
                <div style={{
        paddingLeft:(windowSize.innerWidth/2)-200}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                        <p style={{textAlign:"center"}}>Your application has been submitted successfully !</p>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                    <Button onClick={() => navigate("/Apply")} className='button' style={{paddingLeft:25,paddingRight:25,marginLeft:100}} variant='outlined' sx={{ color: 'black', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}>
              <ArrowBackIcon></ArrowBackIcon>  |  Go back !
              </Button>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                    <Button onClick={() => navigate("/")} className='button' style={{paddingLeft:25,paddingRight:25,marginLeft:100}} variant='outlined' sx={{ color: 'black', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}>
              <ArrowBackIcon></ArrowBackIcon>  |  Home
              </Button>
                    </ListItem>
                </List>
                </div>
                <Box sx={{ width: '100%',paddingTop:40,paddingRight:'%50' }}></Box>
                <FooterDisabled />
                </div>
            </div>
        </div>
    )
}

export default AfterSubmit
