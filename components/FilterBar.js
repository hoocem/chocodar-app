import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../common/theme';

export const FilterBar = ({onShowModal}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onShowModal} style={styles.itemContainer}>
        <MaterialCommunityIcons
          name="sort"
          size={20}
          color={theme.colors.white}
        />
        <Text style={styles.itemtext}>Sort by</Text>
      </TouchableOpacity>
      <View style={styles.verticalDivider} />
      <TouchableOpacity style={styles.itemContainer}>
        <FontAwesome name="filter" size={20} color={theme.colors.white} />
        <Text style={styles.itemtext}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemtext: {
    marginLeft: 5,
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  verticalDivider: {
    borderLeftWidth: 1,
    height: '100%',
    borderColor: theme.colors.white,
  },
});

export default FilterBar;
