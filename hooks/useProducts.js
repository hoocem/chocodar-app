import {useQuery} from 'react-query';
import {getProducts} from '../services/products';

export const useProducts = () => {
  return useQuery('products', async () => {
    const {data} = await getProducts();
    return data.data;
  });
};
