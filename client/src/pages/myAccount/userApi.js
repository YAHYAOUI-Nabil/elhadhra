import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { signinUrl, signupUrl } from '../../config/apiUrls';

const API = axios.create();

export const signin = createAsyncThunk(
    "auth/signin",
    async (formData) => {
        const response = await API.post(signinUrl, formData);
        localStorage.setItem("accessToken", response.data.token);
        return response.data
    }
) 

export const signup = createAsyncThunk(
    "auth/signup",
    async (formData) => {
        const response = await API.post(signupUrl, formData);
        localStorage.setItem("accessToken", response.data.token);
        return response.data
    }
) 

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        localStorage.removeItem("accessToken");
    }
) 