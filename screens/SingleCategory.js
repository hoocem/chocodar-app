import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
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

const SingleCategory = ({navigation, route}) => {
  const {categoryId, categoryName} = route.params;

  const [params, setParams] = useState({category: categoryId});
  const [showSortBy, setShowSortBy] = useState(false);
  const [selectedSortValue, setSelectedSortValue] = useState(0);

  const {isLoading, isError, data} = useProducts(params);

  const handleShowSortBy = () => {
    setShowSortBy(prevState => !prevState);
  };

  const handleSelectSort = (value, sortIndex) => {
    setSelectedSortValue(sortIndex);
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
      <Header
        onGoBack={() => {
          navigation.goBack();
        }}
      />
      <FilterBar onShowModal={handleShowSortBy} />
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
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        )}
      </View>
      {showSortBy && (
        <SortBy
          selectedIndex={selectedSortValue}
          onSelect={handleSelectSort}
          onShowModal={handleShowSortBy}
        />
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
  loadingIndicator: {
    height: '95%',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default SingleCategory;
