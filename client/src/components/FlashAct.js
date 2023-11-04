import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FlashAct = () => {
    const [articles, setArticles] = useState([])
    const months = ["Jan", "Fev", "Mar", "Avr", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]

    useEffect(() => {
        axios.get(`http://localhost:5000/articles`)
             .then((response) => {
                console.log(response.data.articles)
                setArticles(response.data.articles)
             })
             .catch((error) => {
                console.log(error)
             })
      }, [])
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
                        <p className='text-sm'>{title}</p>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

export default FlashAct