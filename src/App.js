import React, { useEffect, useState } from 'react'
import { Container, Typography, Grid, AppBar, Grow } from '@material-ui/core'
// import './App.css';

import Footer from './components/Footer/footer'
import Appnavbar from '../src/components/navbar/Navbar'
import { BrowserRouter,Switch,Route   } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'


const App = () => {

  return (

    <Container maxWidth="lg" >
      
      <Grow in>
        <Container>
        <BrowserRouter>
        <Appnavbar/>
        <Switch>
          <Route path="/Auth" exact component={Auth}/>
          <Route path="/" exact component={Home}/>
        </Switch>
         
        </BrowserRouter>
         
          </Container>
      </Grow>
      <Footer/>
    </Container>

  );
}

export default App;
