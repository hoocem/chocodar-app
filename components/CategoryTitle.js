import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {theme} from '../common/theme';

export const CategoryTitle = ({title}) => {
  return <Text style={styles.titleText}>{title}</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 10,
    marginTop: 10,
    color: theme.colors.primay,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CategoryTitle;
