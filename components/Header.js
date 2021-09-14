import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from './SearchBar';
import {theme} from '../common/theme';

export const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <SearchBar />
      <Ionicons name="cart-outline" size={35} color={theme.colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primay,
    padding: 10,
  },
});

export default Header;
