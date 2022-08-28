import React, { useState, useEffect, useRef  } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default function RegisterForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const form = useRef();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const sendEmail = (e) => {
    console.log("asss");
    e.preventDefault();

    emailjs.sendForm('service_cft4auq', 'template_jj7hfrd', form.current, 'WbkpU6NDgUVYWCU5H')
      .then((result) => {
          console.log(result.text);
          navigate("/AfterSubmit")
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <div style={{
        paddingLeft:(windowSize.innerWidth/2)-200}}>  
      <Box sx={{ width: '100%',paddingTop:20,paddingRight:'%50' }}></Box>  
      <h2 style={{color:'#5BB462',paddingLeft:10}}>Get started</h2>
    <form ref={form} onSubmit={sendEmail}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',paddingLeft:10 }}>
        <ListItem alignItems="flex-start">
          <TextField label="First Name" type="text" name="user_first_name" /><br></br>
        </ListItem>
        <ListItem alignItems="flex-start">
          <TextField label="Middle Name" type="text" name="user_Middle_name" /><br></br>
        </ListItem>
        <ListItem alignItems="flex-start">
          <TextField label="Last Name" type="text" name="user_Last_name" /><br></br>
        </ListItem>
        <ListItem alignItems="flex-start">
          <TextField label="SS Last Four" type="text" name="Social_Security_Number" /><br></br>
        </ListItem>
        <ListItem alignItems="flex-start">
          <TextField label="Email" type="email" name="user_email" /><br></br>
        </ListItem>
        <ListItem alignItems="flex-start">
          <TextField label="Phone Number" type="text" name="Phone_Number"  /><br></br>
        </ListItem>
        <ListItem alignItems="flex-start">
          <TextField label="Your Job ID" type="text" name="Job_ID" value={location.state.id}  /><br></br>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Button sx={{ color: 'black', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }} style={{marginLeft:70}} variant="contained" type="submit" value="Send" >Submit</Button>
        </ListItem>
        </List>
      
    </form>
      </div>
  );
}
