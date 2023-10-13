import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';


const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <Box sx={{ flexGrow: 0 }}>
          <AppBar sx={{ backgroundColor: "#ffffff", width: "100px", height: "1024px", left: "0", }} >
            <div className="menu-button">
              <img src='/Assets/menu.svg' alt='menu' />
            </div>
            <Typography sx={{ color: "#000000", height: "600px", }}>
              <span className='typ-1'><p>Founders Desk</p></span>
            </Typography>
            <Typography sx={{ color: "#000000", backgroundColor: "#D2E177", height: "315px" }}>
              <span className='typ-2'><p>Get<br />Access</p></span>
            </Typography>
          </AppBar>
        </Box>
      </div>
    </>
  );
}

export default Navbar;