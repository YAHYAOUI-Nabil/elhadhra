import React, { useEffect } from 'react';
import { fetchAllArticles } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const FlashAct = () => {
    const articles = useSelector((state) => state.homeState.articles)
    const dispatch = useDispatch();
    const months = ["Jan", "Fev", "Mar", "Avr", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]

    useEffect(() => {
        dispatch(fetchAllArticles())
      }, [dispatch])
  return (
    <div className='bg-[#F8EEE2] p-4 flex flex-col gap-5'>
        <p className='text-4xl font-bold'>Flash actualité</p>
        {articles.slice(0,2).map((article) => {
            const { _id, title, publishDate } = article;
            const time = new Date(publishDate);
            return (
                <div key={_id} className='flex flex-row gap-3'>
                    <div>
                        <p className='whitespace-nowrap text-sm'>{time.getDate()} {months[time.getMonth()]} </p>
                        <p className='text-sm'>{time.getHours()}h{time.getMinutes() ? time.getMinutes() : '00' }</p>
                    </div>
                    <div>
                        <NavLink to={`/category/article/${_id}`} className='text-sm'>
                            {title}
                        </NavLink>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

export default FlashAct