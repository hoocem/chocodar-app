import {useQuery} from 'react-query';
import {getProducts} from '../services/products';

export const useProducts = () => {
  return useQuery('communications', async () => {
    const {data} = await getProducts();
    return data.data;
  });
};
