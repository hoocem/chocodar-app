import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import CategoryTitle from '../components/CategoryTitle';

const Categories = () => {
  return (
    <>
      <Header />
      <View>
        <View style={styles.titleContainer}>
          <CategoryTitle s title="All categories" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    margin: 10,
  },
});

export default Categories;
