import axios from 'axios';

import { articleByCategoriesUrl } from '../config/apiUrls';

const API = axios.create();

export const getArticlesByCategory = (category) => API.get(articleByCategoriesUrl+category)