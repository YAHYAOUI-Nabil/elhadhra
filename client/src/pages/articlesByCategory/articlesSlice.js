import { createSlice } from '@reduxjs/toolkit';
import { fetchArticlesByCategory } from '../../api';

const initialState = {
  loading: false,
  updateState: false,
  error: "",
  response: "",
  articles: [],
}

export const articlesSlice = createSlice({
  name: 'articles',
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
          .addCase(fetchArticlesByCategory.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
            return {
              ...state,
              loading: false,
              articles: action.payload,
              response: "get articles by category"
            }
          })
          .addCase(fetchArticlesByCategory.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              articles: []
            }
          })
  }
})

export const { changeStateTrue, changeStateFalse, clearResponse } = articlesSlice.actions

export default articlesSlice.reducer