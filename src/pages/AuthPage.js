import { Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, Paper, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import {makeStyles} from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import React from 'react'


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
  return (
    <div>
        <Container component="main" maxWidth="xs">
        <Toolbar />
        <Paper elevation={3} style={{ borderRadius: '15px' }}>
          <div className={classes.paper}>
            <Typography variant="h5" color="primary">
              Sign in
            </Typography>
            {/* <form noValidate className={classes.form} onKeyPress={(e) => e.key === 'Enter' && onRequestLogin()}> */}
            <form noValidate className={classes.form} >
            <FormControl fullWidth>
            <InputLabel  >
                User Name
            </InputLabel>
            <Input type='text' autoComplete="username"required='true' fullWidth size='small'/>
            </FormControl>
            <FormControl fullWidth  style={{marginTop:'1rem'}} >
            <InputLabel>
                Password
            </InputLabel>
            <Input type='password'   />
            {/* <FormHelperText style={{ color: 'red' }}>'w'</FormHelperText> */}
            </FormControl>
              {/* <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="showPassword"
                  />
                }
                label="Show password"
              /> */}
              {/* <Typography variant="body2" color="error">
                {errorMessage}
              </Typography> */}
              {/* <Button style={{ marginTop: '16px' }} variant="contained" fullWidth color="primary" size="large" onClick={onRequestLogin}> */}
              <Button style={{ marginTop: '16px' }} variant="contained" fullWidth color="primary" size="large" >
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