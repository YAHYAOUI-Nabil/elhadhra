import React from 'react';
import { NavLink } from 'react-router-dom';
import { VscTriangleRight } from 'react-icons/vsc';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Title from '../../../utils/Title';
import Article from '../../../utils/Article';

const Articles = (props) => {
  const { title, articles } = props;
  const data = articles.filter((item) => item.category === title);
  return (
    <div className='flex flex-col gap-4 my-4'>
      <Title title={title} color="black" />
      <div className='flex lg:flex-row flex-col gap-5'>
        {data.slice(0,2).map((item) => (
          <Article 
            key={item._id}
            id={item._id}
            image={item.imageUrl}
            title={item.title}
            size={2}
            height="md:h-[360px] h-[200px]"
            description={item.description} />
        ))}
      </div>
      <div className='flex flex-col gap-4'>
        {data.slice(2,5).map((item) => (
            <div key={item._id} className='flex flex-row gap-2 items-center font-bold md:text-base text-sm'>
              <VscTriangleRight className='text-red-500' />
              <NavLink to={`/category/article/${item._id}`}>{item.title}</NavLink>
            </div>
        ))}
      </div>
      <div className='flex justify-end'>
        <div className='flex flex-row gap-2 items-center'>
          <NavLink to={`/category/${title}`} className='uppercase font-semibold md:text-xl text-base'>tous les articles {title}</NavLink>
          <NavLink to={`/category/${title}`} className='flex items-center'><MdOutlineKeyboardArrowRight className='h-6 w-6' /></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Articles