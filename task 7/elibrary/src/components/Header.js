import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Library Management
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/add" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Add Book</Button>
        </Link>
        <Button color="inherit">Sign Up</Button>
        <Button color="inherit">Login In</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
