import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemsMenu = (props) => {
    const {title, items} = props
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-lg uppercase text-gray-300'>{title}</h2>
        <div className='flex flex-col gap-4 pl-2 text-white'>
            {items.map((item) => (
                <NavLink 
                    key={item.id} 
                    to={item.route} 
                    className={({ isActive }) =>
                        [
                            isActive ? "text-red-600" : "", "hover:text-red-600 text-lg font-bold tracking-tighter uppercase"
                        ].join(" ")
                    }
                    // className='text-lg font-bold tracking-tighter uppercase'
                >{item.name}</NavLink>
            ))}
        </div>
    </div>
  )
}

export default ItemsMenu