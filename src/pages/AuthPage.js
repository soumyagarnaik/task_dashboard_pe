import { Button, FormControl, FormHelperText, Input, InputLabel, Paper, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import {makeStyles} from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import React,{useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '3rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      verticalAlign: 'center',
    },
    form: {
      width: '100%',
      marginTop: 1,
      marginBottom: 5
    }
  }));

const theme = createTheme();
  
const AuthPage = () => {
  const classes = useStyles(theme);
  const navigate = useNavigate()
  const {loginUser, loggedUserID, error} = useContext(AuthContext)
  const [authenticationData,setAuthenticationData] = useState({
    email:'',
    password:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
      setAuthenticationData({ ...authenticationData, [name]: value });
  };
  const onRequestLogin = (e) => {
      loginUser(authenticationData)
      e.preventDefault();
    }
  
    useEffect(()=> {
      if(loggedUserID) {
        navigate('/dashboard')
      }
    },[loggedUserID])
  return (
    <div>
        <Container component="main" maxWidth="xs">
        <Toolbar />
        <Paper elevation={3} style={{ borderRadius: '15px' }}>
          <div className={classes.paper}>
            <Typography variant="h5" color="primary">
              Sign in
            </Typography>
            <form noValidate className={classes.form} onKeyPress={(e) => e.key === 'Enter' && onRequestLogin()}>
            <FormControl fullWidth>
            <InputLabel  >
                User Email
            </InputLabel>
            <Input 
              type='email' 
              autoComplete="email"
              required='true' 
              fullWidth 
              size='small'
              onChange={handleChange}
              value={authenticationData.email}
              name="email"
              labelName="User Email"
              mandatory={true}/>
            </FormControl>
            <FormControl fullWidth  style={{marginTop:'1rem'}} >
            <InputLabel>
                Password
            </InputLabel>
            <Input 
            type='password'
            autoComplete="password"
            required='true' 
            fullWidth 
            size='small'
              onChange={handleChange}
              value={authenticationData.password}
              name="password"
              labelName="User Password"
              mandatory={true}   />
              {
                error && (
                <FormHelperText style={{ color: 'red' }}>{error}</FormHelperText> 
                )
              }
            </FormControl>
              <Button style={{ marginTop: '16px' }} variant="contained" fullWidth color="primary" size="large" onClick={onRequestLogin}>
                Sign In
              </Button>
            </form>
          </div>
        </Paper>
      </Container>
    </div>
  )
}

export default AuthPage