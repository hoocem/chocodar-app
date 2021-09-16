import {useQuery} from 'react-query';
import {getCategories} from '../services/categories';

export const useProducts = () => {
  return useQuery('categories', async () => {
    const {data} = await getCategories();
    return data.data;
  });
};
