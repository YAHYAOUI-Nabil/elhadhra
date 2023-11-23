import React from 'react';
import { NavLink } from 'react-router-dom';


const Article = (props) => {
    const {id, image, category, title, author, description, size, divider, height} = props;
    const maxLength = 250;
  return (
    <div className='flex flex-col gap-2'>
        <div>
            <NavLink to={`/category/article/${id}`}>
              <img 
                src={image} 
                alt={title} 
                className={`w-full object-cover ${height}`} />
            </NavLink>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-red-900 uppercase text-lg font-bold'>{category}</p>
            {divider && <div className='border-b-[1px] border-black w-16'></div>}
            <NavLink to={`/category/article/${id}`}><p className={`text-black text-${size}xl font-semibold hover:text-red-900`}>{title}</p></NavLink>
            {author && <p className='text-sm -mt-2'>Rédigé par {author}</p>}
            {description && <p className='text-base'>{description?.length < maxLength ? description : description?.slice(0,maxLength)+'...'}</p>}
        </div>
    </div>
  );
}

export default Article