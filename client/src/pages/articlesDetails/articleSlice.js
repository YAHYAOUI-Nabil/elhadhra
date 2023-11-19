import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleById } from '../../api';

const initialState = {
  loading: false,
  updateState: false,
  error: "",
  response: "",
  article: {},
}

export const articleSlice = createSlice({
  name: 'article',
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
          .addCase(fetchArticleById.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchArticleById.fulfilled, (state, action) => {
            return {
              ...state,
              loading: false,
              article: action.payload,
              response: "get article by id"
            }
          })
          .addCase(fetchArticleById.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              article: {}
            }
          })
  }
})

export const { changeStateTrue, changeStateFalse, clearResponse } = articleSlice.actions

export default articleSlice.reducer