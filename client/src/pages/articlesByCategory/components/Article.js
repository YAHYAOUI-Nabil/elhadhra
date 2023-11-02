import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';


const Article = (props) => {
    const {id, image, title, date, summary} = props;
  return (
    <div className='flex flex-row gap-2 border-b-2 border-black pb-6 mb-6'>
        <div className='w-2/5'>
            <NavLink to={`/category/article/${id}`}><img src={image} alt={title} className='w-full h-52 object-cover' /></NavLink>
        </div>
        <div className='flex flex-col gap-2 w-3/5 py-2'>
            <NavLink to={`/category/article/${id}`}><p className={`text-black text-2xl font-semibold`}>{title}</p></NavLink>
            <p className='flex flex-row items-center gap-2 text-sm'><MdDateRange className='w-5 h-5' />{new Date(date).toDateString()}</p>
            <p className='text-base'>{summary}</p>
        </div>
    </div>
  );
}

export default Article