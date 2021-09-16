import axios from 'axios';
import {apiBaseUrl} from '../common/config';

const path = '/products';

export const getProducts = () => {
  const ep = apiBaseUrl + path;
  return axios(ep);
};
