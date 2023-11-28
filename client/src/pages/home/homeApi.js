import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { articlesUrl, videosUrl } from '../../config/apiUrls';



export const fetchAllArticles = createAsyncThunk(
    "article/fetchAllArticles",
    async () => {
        const response = await axios.get(articlesUrl);
        return response.data.articles
    }
) 

export const fetchVideos = createAsyncThunk(
    "article/fetchVideos",
    async () => {
        const response = await axios.get(videosUrl);
        return response.data.videos
    }
) 