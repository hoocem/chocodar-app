import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  FlatList,
  BackHandler,
} from 'react-native';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import dotProp from 'dot-prop-immutable';
import {useProducts} from '../hooks/useProducts';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CategoryTitle from '../components/CategoryTitle';
import ProductCard from '../components/ProductCard';
import SortBy from '../components/SortBy';
import {theme} from '../common/theme';

export const Home = ({navigation}) => {
  const isFocused = useIsFocused();

  const [params, setParams] = useState({});
  const [showSortBy, setShowSortBy] = useState(false);
  const [selectedSortValue, setSelectedSortValue] = useState(0);
  const [searchTerm, setSearchterm] = useState('');

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

  useEffect(() => {
    setSearchterm('');
  }, [isFocused]);

  const displayProductDetails = productId => {
    navigation.navigate('ProductDetails', {
      productId,
    });
  };

  const handleSearchChange = text => {
    setSearchterm(text);
  };

  const handleSubmitSearch = () => {
    navigation.navigate('Search', {
      keyword: searchTerm,
    });
    setSearchterm('');
  };

  const handleClearSearch = () => {
    setSearchterm('');
  };

  return (
    <>
      <Header
        keyword={searchTerm}
        onSearchChange={handleSearchChange}
        onSubmitSearch={handleSubmitSearch}
        onClearSearch={handleClearSearch}
      />
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
            contentContainerStyle={styles.flatListContent}
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
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  flatListContent: {
    paddingBottom: 10,
  },
  loadingIndicator: {
    height: '85%',
  },
});

export default Home;
