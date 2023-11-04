import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteArticle from './components/FavoriteArticle';
import Article from './components/Article';
import FlashAct from '../../components/FlashAct';
import FollowUs from '../../components/FollowUs';
import LettreInf from '../../components/LettreInf';
import SalePoint from '../../components/SalePoint';

const Index = () => {
  const [articles, setArticles] = useState([])
  const location = useLocation();
  const category = location.pathname.split('/')[location.pathname.split('/').length - 1]

  useEffect(() => {
    axios.get(`http://localhost:5000/articles/category/?category=${category}`)
         .then((response) => {
            console.log(response.data.articles)
            setArticles(response.data.articles)
         })
         .catch((error) => {
            console.log(error)
         })
  }, [category])
  return (
    <div className="px-24 py-4">
      <p className='uppercase text-xs'>accueil {category}</p>
      <div className='flex flex-row gap-6'>
        <div className='w-3/4'>

          <FavoriteArticle category={category} article={articles[0]} />

          {articles?.map((article) => {
            const {_id, title, summary, imageUrl, publishDate} = article;
            return (
              <Article key={_id} id={_id} title={title} summary={summary} image={imageUrl} date={publishDate} />
            );
          })}
        </div>
        <div className='w-1/4 flex flex-col gap-4'>
          <SalePoint />
          <FlashAct />
          <LettreInf />
          <FollowUs />
        </div>
      </div>
    </div>
  )
}

export default Index