import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { articleByIdUrl } from '../../config/apiUrls';



export const fetchArticleById = createAsyncThunk(
    "article/fetchArticleById",
    async (id) => {
        const response = await axios.get(articleByIdUrl+id);
        return response.data.article
    }
) 