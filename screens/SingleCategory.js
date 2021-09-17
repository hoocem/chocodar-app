import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useProducts} from '../hooks/useProducts';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CategoryTitle from '../components/CategoryTitle';
import ProductCard from '../components/ProductCard';
import {theme} from '../common/theme';

const SingleCategory = ({navigation, route}) => {
  const {categoryId, categoryName} = route.params;

  const displayProductDetails = productId => {
    navigation.navigate('ProductDetails', {
      productId,
    });
  };

  const {isLoading, isError, data} = useProducts({category: categoryId});
  return (
    <>
      <Header
        onGoBack={() => {
          navigation.goBack();
        }}
      />
      <FilterBar />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <CategoryTitle title={categoryName} />
        </View>
        {isLoading && (
          <ActivityIndicator
            style={styles.loadingIndicator}
            size="large"
            color={theme.colors.primay}
          />
        )}
        {isError && <Text>Error...</Text>}
        {data && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ProductCard
                product={item}
                displayDetails={displayProductDetails}
              />
            )}
            keyExtractor={item => item._id}
            numColumns={2}
            key={2}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.lightGray,
  },
  loadingIndicator: {
    height: '95%',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default SingleCategory;
