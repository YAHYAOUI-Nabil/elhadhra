import React from 'react';
import { NavLink } from 'react-router-dom';


const Article = (props) => {
    const {image, category, title, author, description, size, divider} = props;
  return (
    <div className='flex flex-col gap-2'>
        <div>
            <NavLink to={'/'}><img src={image} alt={title} className='w-full object-cover' /></NavLink>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-red-900 uppercase text-lg font-bold'>{category}</p>
            {divider && <div className='border-b-[1px] border-black w-16'></div>}
            <NavLink to={'/'}><p className={`text-black text-${size}xl font-semibold hover:text-red-900`}>{title}</p></NavLink>
            <p className='text-sm -mt-2'>{author}</p>
            <p className='text-base'>{description}</p>
        </div>
    </div>
  );
}

export default Article