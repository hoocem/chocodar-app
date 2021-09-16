import axios from 'axios';
import {apiBaseUrl} from '../common/config';

const path = '/categories';

export const getCategories = () => {
  const ep = apiBaseUrl + path;
  return axios(ep);
};
