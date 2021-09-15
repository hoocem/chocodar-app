import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CategoryTitle from '../components/CategoryTitle';
import ProductsList from '../components/ProductsList';
import {theme} from '../common/theme';

export const Home = ({navigation}) => {
  const displayProductDetails = () => {
    navigation.navigate('ProductDetails');
  };

  return (
    <>
      <Header />
      <FilterBar />
      <View style={styles.contentContainer}>
        <CategoryTitle title="All products" />
        <ProductsList displayDetails={displayProductDetails} />
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
});

export default Home;
