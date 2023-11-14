import axios from 'axios';

import { articleByCategoryUrl } from '../../config/apiUrls';
import { getArticles } from './articlesSlice';

const API = axios.create();


export const getArticlesByCategoryApi = (category, dispatch) => {
    API.get(articleByCategoryUrl+category)
        .then((res) => {
            dispatch(getArticles(res.data.articles))
        })
        .catch((err) => {
            console.log(err)
        })
}