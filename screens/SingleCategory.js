import React from 'react';
import {Text} from 'react-native';

const SingleCategory = ({route}) => {
  const {categoryId} = route.params;
  return <Text>Single category {categoryId}</Text>;
};

export default SingleCategory;
