import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleDetails from './components/ArticleDetails';
import FlashAct from '../../components/FlashAct';
import FollowUs from '../../components/FollowUs';
import LettreInf from '../../components/LettreInf';
import SalePoint from '../../components/SalePoint';
import { getArticleDetailsApi } from '../../api';

const Index = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article.article)
  const {id} = useParams();

  useEffect(() => {
    getArticleDetailsApi(id, dispatch)
  }, [id])

  return (
    <div className="px-24 py-4">
      <p className='uppercase text-xs'>accueil / {article.category}</p>
      <div className='flex flex-row gap-6'>
        <div className='w-2/3'>

          <ArticleDetails 
            title={article.title}
            summary={article.summary}
            avatar={article.authorAvatar}
            author={article.author}
            image={article.imageUrl}
            imageDescription={article.imageDescription}
            description={article.description}
            contents={article.contents} />
        </div>
        <div className='w-[28%]  flex flex-col gap-4'>
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