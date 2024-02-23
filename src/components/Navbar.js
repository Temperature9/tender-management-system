// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#2E3B4E',
  },
  brand: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#FFF',
  },
  button: {
    color: '#FFF',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} md={3}>
            <Typography variant="h6" component={Link} to="/" className={classes.brand}>
              Tender App
            </Typography>
          </Grid>
          <Grid item xs={6} md={9}>
            <Grid container justifyContent="flex-end">
              <Button component={Link} to="/login" className={classes.button}>
                Login
              </Button>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="navbar-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
                  Dashboard
                </MenuItem>
                <MenuItem component={Link} to="/bidding" onClick={handleMenuClose}>
                  Bidding
                </MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                  About Profile
                </MenuItem>
                {/* Add more menu items as needed */}
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
