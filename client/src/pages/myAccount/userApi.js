import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { signinUrl, signupUrl, deleteAccountUrl, editInfosUrl } from '../../config/apiUrls';


export const signin = createAsyncThunk(
    "auth/signin",
    async (formData) => {
        const response = await axios.post(signinUrl, formData);
        localStorage.setItem("accessToken", response.data.token);
        return response.data
    }
) 

export const signup = createAsyncThunk(
    "auth/signup",
    async (formData) => {
        const response = await axios.post(signupUrl, formData);
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


export const editInfos = createAsyncThunk(
    "auth/editInfos",
    async (formData) => {
        const response = await axios.put(editInfosUrl, formData);
        return response.data
    }
) 

export const deleteAccount = createAsyncThunk(
    "auth/deleteAccount",
    async () => {
        const response = await axios.delete(deleteAccountUrl);
        return response.data
    }
) 