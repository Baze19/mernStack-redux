import React, { useEffect, useState } from 'react'
import { Container, Typography, Grid, AppBar, Grow } from '@material-ui/core'
// import './App.css';
import memories from '../src/images/memories.png'
import Posts from './components/posts/posts'
import Form from './components/Form/form.js'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { getPost } from './actions/posts'
import Footer from './components/Footer/footer'


const App = () => {

  const dispatch = useDispatch()
  const[currentId, setcurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPost())
  }, [currentId ,dispatch])


  const classes = useStyles()
  return (

    <Container maxWidth="lg" >
      <AppBar className={classes.appBar} maxidth="lg" position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories App</Typography>
        <img src={memories} className={classes.image} alt="icon" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3} >
            <Grid item xm={12} sm={7}>
              <Posts currentId={currentId} setcurrentId={setcurrentId} />
            </Grid>
            <Grid item xm={12} sm={4}>
              <Form  currentId={currentId} setcurrentId={setcurrentId}/>
            </Grid>
          </Grid>
          </Container>
      </Grow>
      <Footer/>
    </Container>

  );
}

export default App;
