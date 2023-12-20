import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const JobsList = (props) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
  // Remove setJobs as it's not used in this example
  // const [Jobs, setJobs] = useState([
  const [Jobs] = useState([
    {
      _id: "1",
      name: "Sample Job",
      payrate: "$20 per hour",
      industry: "Sample Industry",
      address: "Sample Address",
      jobduties: "Sample Job Duties",
      shifts: "Sample Shifts",
      date: "2023-12-20",
      jobrequirements: "Sample Job Requirements",
    },
  ]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="row pb-1">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 10, md: -10 }}
        >
          <Grid item xs={6}>
            <Item>
              <div className="input-group col-lg-4">
                <h2 style={{ color: "#5BB462", paddingLeft: 20 }}>
                  {" "}
                  <SearchIcon /> Find Jobs Faster
                </h2>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "25ch",
                      height: "4ch",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{ marginLeft: 80 }}
                    id="outlined-basic"
                    label="Search by Name"
                    variant="outlined"
                    value={searchName}
                    onChange={onChangeSearchName}
                  />
                </Box>
                <div className="input-group-append">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "25ch",
                        height: "1ch",
                      },
                    }}
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
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "25ch",
                        height: "1ch",
                      },
                    }}
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
        <TableContainer
          sx={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}
          component={"div"}
        >
          <Table sx={{ padding: 20 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1>Jobs</h1>
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Jobs.filter((job) => {
                if (searchName === "") {
                  return job;
                } else if (
                  job.name.toLowerCase().includes(searchName.toLowerCase())
                ) {
                  return job;
                }
                return null;
              }).map((job) => (
                <TableRow
                  key={job.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <b>{job.name}</b>
                    <br></br>
                    {job.payrate}
                    <br></br>
                    {job.industry}
                  </TableCell>
                  <TableCell align="right">{job.address}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() =>
                        navigate("/MoreInfo_" + job._id, {
                          state: {
                            id: job._id,
                            name: job.name,
                            address: job.address,
                            industry: job.industry,
                            payrate: job.payrate,
                            jobduties: job.jobduties,
                            shifts: job.shifts,
                            date: job.date,
                            jobrequirements: job.jobrequirements,
                          },
                        })
                      }
                    >
                      More Info
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "20ch",
            height: "10ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div></div>
      </Box>
    </div>
  );
};

export default JobsList;
