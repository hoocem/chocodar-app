import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from './SearchBar';
import {theme} from '../common/theme';

export const Header = ({
  keyword,
  onGoBack,
  onCartClick,
  onSearchChange,
  onSubmitSearch,
  onClearSearch,
}) => {
  const cart = useSelector(state => state.cartReducer);

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
      <TouchableOpacity onPress={onCartClick}>
        {!!cart.length && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart.length}</Text>
          </View>
        )}
        <Ionicons name="cart-outline" size={35} color={theme.colors.white} />
      </TouchableOpacity>
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
  badge: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    top: 1,
    right: 1,
    padding: 1,
    backgroundColor: theme.colors.green,
    borderRadius: 10,
  },
  badgeText: {
    color: theme.colors.white,
  },
});

export default Header;
