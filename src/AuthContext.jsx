/* eslint-disable react/prop-types */
import React , {useState , createContext } from "react";
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)

    const [isLoggedIn , setIsLoggedIn] = useState(false)

   const navigate  = useNavigate()

      const register = (userData) => {
    // Save the user data to localStorage when registering
    localStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('user', JSON.stringify(user));
   
    setIsLoggedIn(true)
     navigate('/dashboard');
  };

    const login = (email, password) => {
    // Fetch the user data from localStorage based on the provided username
    const savedUserData = JSON.parse(localStorage.getItem('user'));
    
    if (savedUserData && savedUserData.email === email && savedUserData.password === password) {
      // If the username and password match, set the user state and isLoggedIn flag
      setUser(savedUserData);
      setIsLoggedIn(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    // Clear the user data from localStorage and reset the user state
    sessionStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

    return (
      <AuthContext.Provider
        value={{ user, isLoggedIn, register, login, logout }}
      >
        {children}
      </AuthContext.Provider>
    );
}