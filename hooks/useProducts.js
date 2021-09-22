import {useQuery} from 'react-query';
import {
  getProducts,
  getSingleProduct,
  getSimilarProducts,
} from '../services/products';

export const useProducts = queryParams => {
  return useQuery(['products', queryParams], async () => {
    const {data} = await getProducts(queryParams);
    return data.data;
  });
};

export const useSingleProduct = productId => {
  return useQuery(['singleProduct', productId], async () => {
    const {data} = await getSingleProduct(productId);
    return data.data;
  });
};

export const useSimilarProducts = productId => {
  return useQuery(['similarProducts', productId], async () => {
    const {data} = await getSimilarProducts(productId);
    return data.data;
  });
};
