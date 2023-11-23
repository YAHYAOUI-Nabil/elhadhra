import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { articlesUrl, videosUrl } from '../../config/apiUrls';

const API = axios.create();


export const fetchAllArticles = createAsyncThunk(
    "article/fetchAllArticles",
    async () => {
        const response = await API.get(articlesUrl);
        return response.data.articles
    }
) 

export const fetchVideos = createAsyncThunk(
    "article/fetchVideos",
    async () => {
        const response = await API.get(videosUrl);
        return response.data.videos
    }
) 