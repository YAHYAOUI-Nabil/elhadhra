import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../pages/articlesByCategory/articlesSlice';
import articleSlice from '../pages/articlesDetails/articleSlice';

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    article: articleSlice
  },
})

