import React from 'react'
import Lettre from '../home/components/Lettre'
import Signin from './components/Signin'
import Signup from './components/Signup'
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
        <div className="px-24 pt-10 pb-2">
            <div className='flex flex-row gap-12 mb-10'>
                <Signin />
                <Signup />
            </div>
            <Lettre />
        </div>
      }
    </>
  )
}

export default Index