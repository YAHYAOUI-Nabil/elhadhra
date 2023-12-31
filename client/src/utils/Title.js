import React from 'react'

const Title = ({title, color}) => {
  return (
    <div className={`flex w-full text-${color}`}>
        <h2 className="capitalize md:text-4xl text-2xl font-extrabold whitespace-nowrap">{title}</h2>
        <div className={`border-b-2 border-${color} w-full ml-1`}></div>
    </div>
  )
}

export default Title