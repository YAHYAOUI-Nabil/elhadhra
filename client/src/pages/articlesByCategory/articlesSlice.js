import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticles: (state, action) => {
      return {...state, articles : action.payload}
    },
  },
})

export const { getArticles } = articlesSlice.actions

export default articlesSlice.reducer