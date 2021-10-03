import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from './SearchBar';
import {theme} from '../common/theme';

export const Header = ({
  keyword,
  onGoBack,
  onSearchChange,
  onSubmitSearch,
  onClearSearch,
}) => {
  return (
    <View style={styles.mainContainer}>
      {onGoBack && (
        <TouchableOpacity onPress={onGoBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={35} color={theme.colors.white} />
        </TouchableOpacity>
      )}
      <SearchBar
        value={keyword}
        onChange={onSearchChange}
        onSubmit={onSubmitSearch}
        onClear={onClearSearch}
      />
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
  backBtn: {
    marginRight: 5,
  },
});

export default Header;
