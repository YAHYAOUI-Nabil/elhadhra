import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { articleByIdUrl } from '../../config/apiUrls';

const API = axios.create();


export const fetchArticleById = createAsyncThunk(
    "article/fetchArticleById",
    async (id) => {
        const response = await API.get(articleByIdUrl+id);
        return response.data.article
    }
) 