/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    regLog(null);
    navigate('/');
  },[]);
  return (
    <div>
      
    </div>
  )
}

export default Logout;