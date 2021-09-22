import React, {useState, useCallback} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  FlatList,
  BackHandler,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import dotProp from 'dot-prop-immutable';
import {useProducts} from '../hooks/useProducts';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CategoryTitle from '../components/CategoryTitle';
import ProductCard from '../components/ProductCard';
import SortBy from '../components/SortBy';
import {theme} from '../common/theme';

export const Home = ({navigation}) => {
  const [params, setParams] = useState({});
  const [showSortBy, setShowSortBy] = useState(false);

  const {isLoading, isError, data} = useProducts(params);

  const handleShowSortBy = () => {
    setShowSortBy(prevState => !prevState);
  };

  const handleSelectSort = value => {
    setParams(dotProp.set(params, 'sort', value));
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (showSortBy) {
          handleShowSortBy();
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [showSortBy]),
  );

  const displayProductDetails = productId => {
    navigation.navigate('ProductDetails', {
      productId,
    });
  };

  return (
    <>
      <Header />
      <FilterBar onShowModal={handleShowSortBy} />
      <View style={styles.contentContainer}>
        <CategoryTitle title="All products" />
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
      </View>
      {showSortBy && (
        <SortBy onSelect={handleSelectSort} onShowModal={handleShowSortBy} />
      )}
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
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  loadingIndicator: {
    height: '85%',
  },
});

export default Home;
