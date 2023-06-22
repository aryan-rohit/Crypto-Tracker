import React from 'react'
import {AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme} from "@mui/material";
import { Navigate,useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


function Header() {
    const history=useNavigate();
    const {currency,setCurrency }=CryptoState();
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: '#fff',
          },
          mode: 'dark',
        },
      });
  return (
    
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography
                onClick={()=>history("/")}
                variant='h6'
                style={{
                flex: 1,
                color: "gold",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
                >Crypto Tracker</Typography>
                <Select 
                variant='outlined'
                style={{
                    width:100,
                    height:40,
                    marginRight:15
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
            </Toolbar>
        </Container>
      </AppBar>
      </ThemeProvider>
    
  )
}

export default Header
