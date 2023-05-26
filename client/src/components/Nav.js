import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import jdmLogo from '../images/JdmLogoWhite.png';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from "react-router-dom";
import theme from "../theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pages = ['Home','Products', 'About Us', 'Contact'];

function ResponsiveAppBar() {
    const appliedTheme = createTheme(theme);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("clicked")
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px"
  
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={appliedTheme}>
    <AppBar position="static" style={{ boxShadow: 'none', backgroundColor: 'transparent', zIndex: 1, height: '120px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters color={'primary'}>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <img src={jdmLogo} style={{height: '150px'}}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key="" onClick={handleCloseNavMenu}>
                  <NavLink to="/" style={{ textDecoration: 'none'}}>
                  <Typography textAlign="center">Home</Typography>
                  </NavLink>
                </MenuItem>
                 <MenuItem key="" onClick={handleCloseNavMenu}>
                  <NavLink to="/products" style={{
          textDecoration: 'none'
        }}>
                 <Typography textAlign="center">Vehicles</Typography>
                 </NavLink>
               </MenuItem>
               <MenuItem key="" onClick={handleCloseNavMenu}>
                <NavLink to="/about" style={{ textDecoration: 'none'  }}>
                <Typography textAlign="center">About Us</Typography>
                </NavLink>
                </MenuItem>
              <MenuItem key="" onClick={handleCloseNavMenu}>
                <NavLink to="/contact" style={{ textDecoration: 'none'}}>
               <Typography textAlign="center">Contact Us</Typography>
               </NavLink>
             </MenuItem>
           
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           JDM
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
          
          <MenuItem key="" onClick={handleCloseNavMenu}>
                  <NavLink to="/"  style={linkStyles}>
                  HOME
                  </NavLink>
                </MenuItem>
                 <MenuItem key="" onClick={handleCloseNavMenu}>
                  <NavLink style={linkStyles} to="/products"  >
                 VEHICLES
                 </NavLink>
               </MenuItem>
               <MenuItem key="" onClick={handleCloseNavMenu}>
                <NavLink style={linkStyles}  to="/about" >
               ABOUT US
                </NavLink>
                </MenuItem>
             <MenuItem key="" onClick={handleCloseNavMenu}>
                <NavLink to="/contact" style={linkStyles}>
               CONTACT US
               </NavLink>
             </MenuItem>
       
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    <div class="red-line" style={{width: '90%', paddingLeft: '700px'}}></div>
    </Box>
  );
}
export default ResponsiveAppBar;