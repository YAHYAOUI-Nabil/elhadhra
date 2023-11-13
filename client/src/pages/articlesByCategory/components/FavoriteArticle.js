import React from 'react';
import Title from '../../../utils/Title';
import { NavLink } from 'react-router-dom';

const FavoriteArticle = (props) => {
  const { category, article } = props;
  return (
    <div className='flex flex-col gap-8 my-6 border-b-2 border-black pb-6'>
        <Title title={category} color="black" />
        <div className='flex flex-col gap-2'>
          <div>
              <NavLink to={`/category/article/${article?._id}`}><img src={article?.imageUrl} alt={article?._id} className='w-full h-72 object-cover' /></NavLink>
          </div>
          <div className='flex flex-col gap-2'>
              <p className='text-red-900 uppercase text-lg font-bold'>{article?.category}</p>
              <div className='border-b-[1px] border-black w-16'></div>
              <NavLink to={`/category/article/${article?._id}`}><p className={`text-black text-3xl font-semibold hover:text-red-900`}>{article?.title}</p></NavLink>
              <p className='text-sm -mt-2'>Rédigé par {article?.author}</p>
              <p className='text-base'>{article?.summary}</p>
          </div>
        </div>
    </div>
  )
}

export default FavoriteArticle