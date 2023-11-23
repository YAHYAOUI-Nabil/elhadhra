import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import articlesSlice from '../pages/articlesByCategory/articlesSlice';
import articleSlice from '../pages/articlesDetails/articleSlice';
import userSlice from "../pages/myAccount/userSlice";
import homeSlice from '../pages/home/homeSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({ 
    articles: articlesSlice,
    article: articleSlice,
    user: userSlice,
    homeState: homeSlice
 });


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

