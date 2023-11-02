import React from 'react'
import Lettre from '../home/components/Lettre'
import Signin from './components/Signin'
import Signup from './components/Signup'

const Index = () => {
  return (
    <div className="px-24 pt-10 pb-2">
        <div className='flex flex-row gap-12 mb-10'>
            <Signin />
            <Signup />
        </div>
        <Lettre />
    </div>
  )
}

export default Index