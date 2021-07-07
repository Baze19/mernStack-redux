import React, { useEffect, useState } from 'react'
import useStyles from './style'
import memories from '../../images/memories.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE, AUTH, LOGOUT } from '../../actions/type'
import decode from 'jwt-decode';

import { Container, Typography, Grid, Avatar, AppBar, Toolbar, Paper, Grow, Button } from '@material-ui/core'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('Profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const Logout = () => {
    dispatch({ type: LOGOUT });

    history.push('/auth');

    setUser(null);
  };


  useEffect(() => {


    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) return Logout();
    }
    setUser(JSON.parse(localStorage.getItem('Profile')));

  }, [location]);




  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={Logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar