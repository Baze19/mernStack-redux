import React from 'react'
import useStyles from './style'
import { Container, Typography, Grid, AppBar, Grow } from '@material-ui/core'

 const Footer = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root} spacing={3} position="static" color="inherit">
            <Typography variant='p'> Author: Abiodun Baze</Typography>
            <Typography variant='p'> Copyright &copy; 2021</Typography>
          <p><a href="https://github.com/baze19">github Link</a></p>
        
        </Container>
          
    )
}

export default Footer
