import React from 'react';
import { AppBar, Toolbar, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor: '#1976d2' }}>
      <Container>
        <Toolbar>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            © {new Date().getFullYear()} E-Library Management. All rights reserved.
          </Typography>
          <Link href="/privacy-policy" color="inherit" sx={{ marginRight: 2 }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" color="inherit" sx={{ marginRight: 2 }}>
            Terms of Service
          </Link>
          <Link href="/contact" color="inherit">
            Contact Us
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
