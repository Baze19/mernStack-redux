import React, { useState, useEffect, useCallback } from 'react'
import { Paper, Typography, Avatar, Container, Grid, Button } from '@material-ui/core'
import Input from '../Input/Input'
import Icon from './icon'
import GoogleLogin from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './style'
import { useDispatch } from 'react-redux'
import { Switch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { signingIn,signingUpData } from '../../actions/Auth'
import {FETCH_ALL,CREATE,DELETE,UPDATE,LIKE,AUTH,LOGOUT} from '../../actions/type'



const Auth = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const dispatch = useDispatch()
    const history = useHistory()
    const state = null
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles()
    const [signUp, setSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault()
     
        if(signUp) {
            dispatch(signingUpData(formData, history))
        }
        else{
            dispatch(signingIn(formData, history))
        }
        
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => setShowPassword((prevPassword) => !prevPassword)
    
    const Switchmode =useCallback ( () => {
        setSignUp((prevsignUp) => !prevsignUp)
        setShowPassword(false)
    },[signUp])

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const tokenId = res?.tokenId
        try {
            dispatch({ type: AUTH, payload: { result, tokenId } })
            history.push('/')
        } catch (error) {
            console.log(error)
        }
     
    }
    const googleError = (error) => {
        console.log('error signing in',error)
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >{signUp ? 'sign up' : 'sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={3} >
                        {signUp && (
                            <>
                                <Input name="firstName" label="First Name" autoFocus half={6} handleChange={handleChange} type="text" />
                                <Input name="lastName" label="Last Name" autoFocus half={6} handleChange={handleChange} type="text" />
                            </>


                        )}
                        <Input name="email" label="Email" fullWidth handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" fullWidth handleChange={handleChange}
                            type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {signUp && (
                            <Input name="confirmPassword" label="Repeat Password" autoFocus half={6} handleChange={handleChange} type="password" />
                        )}
                    </Grid>
                    <Button className={classes.submit} type="submit" color="primary" variant="contained" fullWidth> {signUp ? 'sign up' : 'sign in'}</Button>
                    <GoogleLogin
                        clientId="747437257435-k6uhh947gafqont15q7rdt1t9g76sc4g.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton}
                                fullWidth onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant="contained"
                                color="primary">
                                 Sign In with google account
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={Switchmode}>{signUp ? 'already have an account? sign in' : 'Don"t have an account? sign up'}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth
