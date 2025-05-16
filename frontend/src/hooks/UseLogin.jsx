import React, { useState } from 'react'
import { useAuthContext } from './UseAuthContext'

const UseLogin = () => {
   const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
  
    const login = async (email, password) =>{
      setIsLoading(true);
      setError(null);
  
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      })
      const data = await response.json();
  
      if(!response.ok){
        setIsLoading(false);
        setError(data.message);
      }
      if(response.ok){
        localStorage.setItem('user', JSON.stringify(data));
        dispatch({type: 'LOGIN', payload: data});
        setIsLoading(false);
      }
      console.log(data)
    }
    return {login, isLoading, error}
}

export default UseLogin