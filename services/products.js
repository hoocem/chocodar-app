import axios from 'axios';
import {baseUrl} from '../common/config';

const path = '/products';

export const getProducts = () => {
  const ep = baseUrl + path;
  return axios(ep);
};
