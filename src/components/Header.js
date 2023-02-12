import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useContext} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const {loggedUserID,logoutUser} = useContext(AuthContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TASK DASHBOARD
          </Typography>
          {
            (loggedUserID) && (
              <Button color="inherit" onClick={() => logoutUser()}>Logout</Button>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header