import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';
import {useProducts} from '../hooks/useProducts';

const ProductsList = () => {
  const {isLoading, isError, data} = useProducts();

  return (
    <>
      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => <ProductCard />}
          keyExtractor={item => item.id}
          numColumns={2}
          key={2}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      )}
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error...</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default ProductsList;
