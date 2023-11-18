import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
import FavoriteArticle from './components/FavoriteArticle';
import Article from './components/Article';
import FlashAct from '../../components/FlashAct';
import FollowUs from '../../components/FollowUs';
import LettreInf from '../../components/LettreInf';
import SalePoint from '../../components/SalePoint';

import { useDispatch, useSelector } from 'react-redux';
import { getArticlesByCategoryApi } from '../../api';

const Index = () => {

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles)
  const location = useLocation();
  const category = location.pathname.split('/')[location.pathname.split('/').length - 1]
  
  

  useEffect(() => {
    getArticlesByCategoryApi(category, dispatch);
  }, [category])
  
  return (
    <div className="px-24 py-4">
      <p className='flex items-center gap-1 uppercase text-xs text-gray-500'>accueil <span><AiOutlineDoubleRight /></span> {category}</p>
      <div className='flex flex-row gap-6'>
        <div className='w-3/4'>

          <FavoriteArticle category={category} article={articles[0]} />

          {articles?.slice(1,articles?.length).map((article) => {
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