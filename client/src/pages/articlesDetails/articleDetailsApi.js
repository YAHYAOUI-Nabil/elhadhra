import axios from 'axios';

import { articleDetailUrl } from '../../config/apiUrls';
import { getArticleDetail } from './articleSlice';

const API = axios.create();


export const getArticleDetailsApi = (id, dispatch) => {
    API.get(articleDetailUrl+id)
        .then((res) => {
            dispatch(getArticleDetail(res.data.article))
        })
        .catch((err) => {
            console.log(err)
        })
}