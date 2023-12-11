import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Index = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      { 
        user.isAuth
        ?
        <Navigate to={'profil'} /> 
        :
        <Navigate to={'signup'} /> 
      }
    </>
  )
}

export default Index