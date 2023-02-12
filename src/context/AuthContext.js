import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthenticationService from '../services/AuthenticationService'
export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedUserID, setLoggedUserID] = useState(localStorage.getItem('loggedUserID'));
  const [error,setError] = useState('')

  const authenticationService = new AuthenticationService();
  const loginUser = (userData) => {
    const userResponse = authenticationService.userLogin(userData)
    if(userResponse && userResponse.status === 200) {
      const userID = userResponse.user.id;
        localStorage.setItem('loggedUserID', userID);
        setLoggedUserID(userID);
        navigate('/dashboard')
    }
    if(userResponse.status === 400) {
      setError('Entred Wrong Credentials')
    }
  };
  const logoutUser = () => {
    localStorage.removeItem('loggedUserID');
    setLoggedUserID();
    navigate('/')
  };
  return (
    <AuthContext.Provider value={{ loggedUserID, loginUser, logoutUser, error}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

AuthContextProvider.defaultProps = {
  children: React.createElement('div')
};
