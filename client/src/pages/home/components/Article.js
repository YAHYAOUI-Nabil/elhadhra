import React from 'react';


const Article = (props) => {
    const {image, category, title, author, description, size} = props;
  return (
    <div className='flex flex-col gap-2'>
        <div>
            <img src={image} alt={title} className='w-full object-cover' />
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-red-700 uppercase text-lg font-bold'>{category}</p>
            <div className='border-b-[1px] border-black w-16'></div>
            <p className={`text-black text-${size}xl font-semibold`}>{title}</p>
            <p className='text-sm -mt-2'>{author}</p>
            <p className='text-base'>{description}</p>
        </div>
    </div>
  );
}

export default Article