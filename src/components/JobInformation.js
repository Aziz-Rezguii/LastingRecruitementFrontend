import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default function JobInformation() {
  
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const location = useLocation();
  var dutiesplit = (location.state.jobduties).split(',');
  const dutieItems = dutiesplit.map((dutiesplit) =>
  <li>{dutiesplit}</li>);

  var reqplit = (location.state.jobrequirements).split(',');
  const reqItems = reqplit.map((reqplit) =>
  <li>{' '+reqplit}</li>);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  if(windowSize.innerWidth<1250){
  return (
    <div style={{
      paddingLeft:(windowSize.innerWidth/2)-200}}>
    <Box sx={{ width: '100%',paddingTop:20,paddingRight:'%50',paddingLeft:0 }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 100, sm: 100, md: 100 }}>
        <Grid item xs={100}>
          <Item><h1 style={{textAlign: "left", color: 'black',paddingLeft:10 }}>{location.state.name}<hr></hr></h1></Item>
        </Grid>
        <Grid item xs={100}>
          <Item><div><h3 style={{textAlign: "left", color: 'black',paddingLeft:10 }}>
            <LocationOnIcon></LocationOnIcon>
            {location.state.adress}
            </h3>
            </div>
            </Item>
        </Grid>
        <Grid item xs={100}>
          <Item><p style={{textAlign: "left", color: 'black',paddingLeft:10 }}>Industry: <b>{location.state.industry}</b><br></br>
            Job Number: <b>{location.state.id}</b><br></br>
            Pay Rate: <b>{location.state.payrate}</b><br></br>
            </p></Item>
        </Grid>
        <Grid item xs={100}>
          <Item><h3 style={{textAlign: "left", color: 'black',paddingLeft:10,fontSize:20 }}>Job Description:<hr></hr></h3>
          

            <Box sx={{ width: '100%',paddingTop:2 }}>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 100, sm: 100, md: 100 }}>
              <Grid item xs={100}>
                <Item><p style={{textAlign: "left", color: 'black',paddingLeft:10,fontSize:20 }}><b>Job Duties:</b><br></br>
                  <div style={{paddingLeft:50}}>
                    <ol>{dutieItems}</ol>
                    </div>
                </p>
                </Item>
              </Grid>
              <Grid item xs={100}>
              <Item><p style={{textAlign: "left", color: 'black',paddingLeft:10,fontSize:20 }}><b>Job Requirements:</b><br></br>
                  <div style={{paddingLeft:50}}>
                    <ol>{reqItems}</ol>
                    </div>
                </p>
                </Item>
              </Grid>
            </Grid>
            </Box>
            <Box sx={{ width: '100%',paddingTop:5,paddingRight:'%50' }}></Box>
            <hr></hr>
            <Box sx={{ width: '100%',paddingTop:3,paddingRight:'%50' }}></Box>
            <h2 style={{color: 'black'}}>Apply Now:</h2>
            <Box sx={{ width: '100%',paddingTop:2,paddingRight:'%50' }}></Box>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ width: '100%',paddingLeft:15 }}>
    <Button
            onClick={() => navigate("/Register_"+location.state.id,{ state: {id: location.state.id}})}
            variant='outlined'
            sx={{ color: 'black', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}
            >
              <ModeEditOutlineIcon></ModeEditOutlineIcon>  |  Apply Now !
              </Button><Box sx={{ width: '100%',paddingTop:2,paddingRight:'%50' }}></Box>
              <Button
              onClick={() => navigate("/Apply")} className='button'
               style={{paddingLeft:25,paddingRight:25,marginLeft:0}}
            variant='outlined'
            sx={{ color: 'black', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}
            >
              <ArrowBackIcon></ArrowBackIcon>  |  Go back !
              </Button></Box>
              <Box sx={{ width: '100%',paddingTop:5,paddingRight:'%50',paddingLeft:0 }}/>
              
    </div>
  );}else{return (
    <div>
    <Box sx={{ width: '100%',paddingTop:20,paddingRight:'%50',paddingLeft:45 }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 100, sm: 100, md: 100 }}>
        <Grid item xs={100}>
          <Item><h1 style={{textAlign: "left", color: 'black',paddingLeft:10 }}>{location.state.name}<hr style={{marginRight:400}}></hr></h1></Item>
        </Grid>
        <Grid item xs={100}>
          <Item><div><h3 style={{textAlign: "left", color: 'black',paddingLeft:10 }}>
            <LocationOnIcon></LocationOnIcon>
            {location.state.adress}
            </h3>
            </div>
            </Item>
        </Grid>
        <Grid item xs={100}>
          <Item><p style={{textAlign: "left", color: 'black',paddingLeft:10 }}>Industry: <b>{location.state.industry}</b><br></br>
            Job Number: <b>{location.state.id}</b><br></br>
            Pay Rate: <b>{location.state.payrate}</b><br></br>
            </p></Item>
        </Grid>
        <Grid item xs={100}>
          <Item><h3 style={{textAlign: "left", color: 'black',paddingLeft:10,fontSize:20 }}>Job Description:<hr style={{marginRight:400}}></hr></h3>
          

            <Box sx={{ width: '100%',paddingTop:2 }}>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 100, sm: 100, md: 100 }}>
              <Grid item xs={100}>
                <Item><p style={{textAlign: "left", color: 'black',paddingLeft:10,fontSize:20 }}><b>Job Duties:</b><br></br>
                  <div style={{paddingLeft:50}}>
                    <ol>{dutieItems}</ol>
                    </div>
                </p>
                </Item>
              </Grid>
              <Grid item xs={100}>
              <Item><p style={{textAlign: "left", color: 'black',paddingLeft:10,fontSize:20 }}><b>Job Requirements:</b><br></br>
                  <div style={{paddingLeft:50}}>
                    <ol>{reqItems}</ol>
                    </div>
                </p>
                </Item>
              </Grid>
            </Grid>
            </Box>
            <Box sx={{ width: '100%',paddingTop:5,paddingRight:'%50' }}></Box>
            <hr style={{marginRight:400}}></hr>
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ width: '100%',paddingLeft:45 }}>
            <Box sx={{ width: '100%',paddingTop:3,paddingRight:'%50' }}></Box>
            <h2 style={{color: 'black'}}>Apply Now:</h2>
            <Box sx={{ width: '100%',paddingTop:2,paddingRight:'%50' }}></Box>
            <Button
            onClick={() => navigate("/Register_"+location.state.id,{ state: {id: location.state.id}})}
            variant='outlined'
            sx={{ color: 'black', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}
            >
              <ModeEditOutlineIcon></ModeEditOutlineIcon>  |  Apply Now !
              </Button><Box sx={{ width: '100%',paddingTop:2,paddingRight:'%50' }}></Box>
              <Button
               onClick={() => navigate("/Apply")} className='button'
               style={{paddingLeft:25,paddingRight:25,marginLeft:0}}
            variant='outlined'
            sx={{ color: 'black', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}
            >
              <ArrowBackIcon></ArrowBackIcon>  |  Go back !
              </Button></Box>
              <Box sx={{ width: '100%',paddingTop:5,paddingRight:'%50',paddingLeft:0 }}/>

              
    </div>)}
}
