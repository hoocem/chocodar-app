import axios from 'axios';
import {apiBaseUrl} from '../common/config';

const path = '/products';

export const getProducts = queryParams => {
  const ep = apiBaseUrl + path;

  const config = {
    params: queryParams,
  };
  return axios(ep, config);
};
