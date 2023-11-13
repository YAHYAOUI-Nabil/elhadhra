import { configureStore } from '@reduxjs/toolkit'
import articlesSlice from '../pages/articlesByCategory/articlesSlice'

export const store = configureStore({
  reducer: {
    articles: articlesSlice
  },
})

