import {useQuery} from 'react-query';
import {getProducts, getSingleProduct} from '../services/products';

export const useProducts = queryParams => {
  return useQuery('products', async () => {
    const {data} = await getProducts(queryParams);
    return data.data;
  });
};

export const useSingleProduct = productId => {
  return useQuery(['sinleProduct', productId], async () => {
    const {data} = await getSingleProduct(productId);
    return data.data;
  });
};
