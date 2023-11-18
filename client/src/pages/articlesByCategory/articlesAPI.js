import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { articleByCategoryUrl } from '../../config/apiUrls';

const API = axios.create();


export const fetchArticlesByCategory = createAsyncThunk(
    "articles/fetchArticles",
    async (category) => {
        const response = await API.get(articleByCategoryUrl+category);
        return response.data.articles
    }
) 
