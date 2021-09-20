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

export const getSingleProduct = productId => {
  const ep = apiBaseUrl + path + `/${productId}`;
  return axios(ep);
};

export const getSimilarProducts = productId => {
  const ep = apiBaseUrl + path + `/similar/${productId}`;
  return axios(ep);
};
