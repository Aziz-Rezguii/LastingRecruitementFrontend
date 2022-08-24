import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VirtualizedList from './joblist'
import FormPropsTextFields from './ApplyForm'

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:0
  }));

export default function RowAndColumnSpacing() {
  return (
    <Box  sx={{ width: '100%',paddingLeft:20,paddingTop:5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 0, md: -50 }}>
        <Grid item xs={4}>
          <Item><FormPropsTextFields/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><VirtualizedList/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
