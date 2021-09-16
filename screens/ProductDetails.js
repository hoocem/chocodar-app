import React from 'react';
import {Text} from 'react-native';

const ProductDetails = ({route}) => {
  const {productId} = route.params;
  return <Text>Product details {productId}</Text>;
};

export default ProductDetails;
