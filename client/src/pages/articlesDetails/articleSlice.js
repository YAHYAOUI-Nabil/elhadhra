import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  article: {},
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticleDetail: (state, action) => {
      return {...state, article : action.payload}
    },
  },
})

export const { getArticleDetail } = articleSlice.actions

export default articleSlice.reducer