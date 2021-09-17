import {useQuery} from 'react-query';
import {getProducts} from '../services/products';

export const useProducts = queryParams => {
  return useQuery('products', async () => {
    const {data} = await getProducts(queryParams);
    return data.data;
  });
};
