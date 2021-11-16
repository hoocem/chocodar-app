import axios from 'axios';
import {baseUrl, apiBaseUrl} from '../common/config';

export const me = token => {
  const path = '/me';
  const ep = apiBaseUrl + path;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios(ep, config);
};

export const signup = data => {
  const path = `${baseUrl}/signup`;

  const config = {
    method: 'post',
    data,
  };
  return axios(path, config);
};

export const signin = data => {
  const path = `${baseUrl}/signin`;

  const config = {
    method: 'post',
    data,
  };
  return axios(path, config);
};
