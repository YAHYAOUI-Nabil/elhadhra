import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { articleByCategoryUrl } from '../../config/apiUrls';



export const fetchArticlesByCategory = createAsyncThunk(
    "articles/fetchArticles",
    async (category) => {
        const response = await axios.get(articleByCategoryUrl+category);
        return response.data.articles
    }
) 
