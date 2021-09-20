import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../common/theme';

const {height} = Dimensions.get('window');

export const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <Ionicons name="search" size={20} color={theme.colors.darkGray} />
      <TextInput style={styles.input} placeholder="Search for products" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    paddingLeft: 5,
    height: height * 0.06,
    borderRadius: 30,
    backgroundColor: theme.colors.white,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
