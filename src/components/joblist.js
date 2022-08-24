import React, { useState, useEffect } from "react";
import JobsDataService from "../services/jobs";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MoreInfo from '../components/MoreInfo';
import { useNavigate } from "react-router-dom";
import MoonLoader from "react-spinners/ClipLoader";
import * as ReactDOM from 'react-dom';
import SearchIcon from '@mui/icons-material/Search';

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

const JobsList = props => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [Jobs, setJobs] = useState([]);
  const [PageCounter, setPageCounter] = useState(0);
  const [searchName, setSearchName ] = useState("");
  const [Loading, setLoading ] = useState(false);
  const [searchAdress, setSearchAdress ] = useState("");
  const jobarray =[];
  const { index, style } = props;
  


  useEffect(() => {
    retrieveJobs();
    setLoading(true)
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchAdress = e => {
    const searchAdress = e.target.value;
    setSearchAdress(searchAdress);
  };

  const retrieveJobs = () => {
    console.log("counter:"+PageCounter);
    JobsDataService.getAll(PageCounter)
      .then(response => {
        setJobs(response.data.jobs);
        console.log(response.data.jobs);
        setLoading(false)
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveJobs();
  };

  const find = (query, by) => {
    JobsDataService.find(query, by)
      .then(response => {
        console.log(response.data.jobs);
        setJobs(response.data.jobs);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name")
  };

  const findByAdress = () => {
    find(searchAdress, "adress")
  };

  const navigate = useNavigate();
  if(windowSize.innerWidth>650){
  return (
    <div>
      <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch',height:'5ch' },}}
            noValidate
            autoComplete="off"
            >
              <div></div>
          </Box>
          <div className="row pb-1">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 10, md: -10 }}>
          <Grid item xs={6}>
          <Item>
            <div className="input-group col-lg-4">
            <h2  style={{color:'#5BB462',paddingLeft:20}}> <SearchIcon/> Find Jobs Faster</h2>
              <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch',height:'4ch'},}}
                noValidate
                autoComplete="off"
                >
                  
                
                <TextField style={{marginLeft:80}} id="outlined-basic" label="Search by Name" variant="outlined" value={searchName} onChange={onChangeSearchName}/></Box>
              <div className="input-group-append">
                <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch',height:'1ch' },}}
                noValidate
                autoComplete="off"
                >
                  <div></div>
              </Box>
              </div>
            </div>
            </Item>
            </Grid>
            <Grid item xs={6}>
          <Item>
            <div className="input-group col-lg-4">
          <div className="input-group-append">
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch',height:'1ch' },}}
            noValidate
            autoComplete="off"
            >
              <div></div>
            </Box>
            </div>
          </div>
          </Item>
          </Grid>
          </Grid>
        </div>
      <div className="row">
        {
          Loading ?
          <div style={{
            paddingLeft:(windowSize.innerWidth/2)-100}}>
          <MoonLoader size={100}  />
          </div>
          :
          <TableContainer sx={{paddingLeft:20,paddingRight:20,paddingBottom:20}} component={'div'}>
      <Table sx={{padding:20 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell><h1>Jobs</h1></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Jobs.filter((Jobs)=>{
            if(searchName==""){
              return Jobs
            }else if(Jobs.name.toLowerCase().includes(searchName.toLowerCase())){
              return Jobs
            }
          }).map((Jobs) => (
            <TableRow
              key={Jobs.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{Jobs.name}</b><br></br>
                {Jobs.payrate}<br></br>
                {Jobs.industry}
              </TableCell>
              <TableCell align="right">{Jobs.adress}</TableCell>
              <TableCell align="right"><Button onClick={() => navigate("/MoreInfo_"+Jobs._id,{ state: { id: Jobs._id, name:Jobs.name, adress:Jobs.adress,industry:Jobs.industry, payrate:Jobs.payrate, jobduties:Jobs.jobduties, shifts:Jobs.shifts, date:Jobs.date ,jobrequirements:Jobs.jobrequirements  }})}>More Info</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>

        }
      
    <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '20ch',height: '10ch'},}}
            noValidate
            autoComplete="off"
            >
            <div></div>
          </Box>

      </div>
    </div>
  );
}else{
  return (
    <div>
      <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch',height:'5ch' },}}
            noValidate
            autoComplete="off"
            >
              <div></div>
          </Box>
          <div className="row pb-1" width>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 50, sm: 10, md: -50 }}>
          <Grid item xs={6}>
          <Item>
            <div className="input-group col-lg-4">
              <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch',height:'4ch'},}}
                noValidate
                autoComplete="off"
                >
                  
                <h2  style={{color:'#5BB462',paddingLeft:10}}> <SearchIcon/> Find Jobs Faster</h2>
                <TextField style={{marginLeft:80}} id="outlined-basic" label="Search by Name" variant="outlined" value={searchName} onChange={onChangeSearchName}/>
              </Box>
              <div className="input-group-append">
                <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch',height:'1ch' },}}
                noValidate
                autoComplete="off"
                >
                  <div></div>
              </Box>
              </div>
            </div>
            </Item>
            
            </Grid>  
            <Grid item xs={6}>
          <Item>
            <div className="input-group col-lg-4">
          <div className="input-group-append">
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch',height:'1ch' },}}
            noValidate
            autoComplete="off"
            >
              <div></div>
            </Box>
            </div>
          </div>
          </Item>
          </Grid>
          </Grid>
        </div>
      <div className="row">
      {
          Loading ?
          <div style={{
            paddingLeft:(windowSize.innerWidth/2)-100}}>
          <MoonLoader size={100}  />
          </div>
          :
          <TableContainer component={'div'}>
          <Table sx={{ minWidth:200,padding:20 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1>Jobs</h1></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Jobs.filter((Jobs)=>{
            if(searchName==""){
              return Jobs
            }else if(Jobs.name.toLowerCase().includes(searchName.toLowerCase())){
              return Jobs
            }
          }).map((Jobs) => (
            <TableRow
              key={Jobs.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{Jobs.name}</b><br></br>
                {Jobs.payrate}<br></br>
                {Jobs.industry}
              </TableCell>
              <TableCell align="right">{Jobs.adress}</TableCell>
              <TableCell align="right"><Button onClick={() => navigate("/MoreInfo_"+Jobs._id,{ state: { id: Jobs._id, name:Jobs.name, adress:Jobs.adress,industry:Jobs.industry, payrate:Jobs.payrate, jobduties:Jobs.jobduties, shifts:Jobs.shifts, date:Jobs.date ,jobrequirements:Jobs.jobrequirements  }})}>More Info</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        }
    <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '20ch',height: '10ch'},}}
            noValidate
            autoComplete="off"
            >
            <div></div>
          </Box>

      </div>
    </div>
  );
  
}
};

export default JobsList;