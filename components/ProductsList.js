import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ProductsList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <ProductCard />}
      keyExtractor={item => item.id}
      numColumns={2}
      key={2}
      columnWrapperStyle={styles.columnWrapperStyle}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default ProductsList;
