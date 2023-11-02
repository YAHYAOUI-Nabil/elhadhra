import axios from 'axios';
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import FlashActualite from '../articlesByCategory/components/FlashActualite';
import ArticleDetails from './components/ArticleDetails';

const Index = () => {
  const [article, setArticle] = useState({})
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    axios.get(`http://localhost:5000/articles/article/${id}`)
         .then((response) => {
            console.log(response.data.article)
            setArticle(response.data.article)
         })
         .catch((error) => {
            console.log(error)
         })
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
            image={article.imageUrl} />
        </div>
        <div className='w-1/3'>
          <FlashActualite />
        </div>
      </div>
    </div>
  )
}

export default Index