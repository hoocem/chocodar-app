import React from 'react';
import {FlatList, Text, ActivityIndicator, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';
import {useProducts} from '../hooks/useProducts';
import {theme} from '../common/theme';

const ProductsList = ({displayDetails}) => {
  const {isLoading, isError, data} = useProducts();

  return (
    <>
      {data && (
        // TODO: remove scroll bar
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ProductCard product={item} displayDetails={displayDetails} />
          )}
          keyExtractor={item => item._id}
          numColumns={2}
          key={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      )}
      {isLoading && (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color={theme.colors.primay}
        />
      )}
      {/* TODO: Add error component */}
      {isError && <Text>Error...</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  loadingIndicator: {
    height: '85%',
  },
});

export default ProductsList;
