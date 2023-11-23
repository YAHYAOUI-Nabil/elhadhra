import { createSlice } from '@reduxjs/toolkit';
import { fetchAllArticles, fetchVideos } from '../../api';

const initialState = {
  loading: false,
  updateState: false,
  error: "",
  response: "",
  articles: [],
  videos: []
}

export const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
          .addCase(fetchAllArticles.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchAllArticles.fulfilled, (state, action) => {
            return {
              ...state,
              loading: false,
              articles: action.payload,
              response: "get articles"
            }
          })
          .addCase(fetchAllArticles.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              loading: false,
              response: "fetch articles failed",
              article: []
            }
          })
          .addCase(fetchVideos.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchVideos.fulfilled, (state, action) => {
            return {
              ...state,
              loading: false,
              videos: action.payload,
              response: "get videos"
            }
          })
          .addCase(fetchVideos.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              loading: false,
              response: "fetch videos failed",
              videos: []
            }
          })
  }
})

export const { changeStateTrue, changeStateFalse, clearResponse } = homeSlice.actions

export default homeSlice.reducer