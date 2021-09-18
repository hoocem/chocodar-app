import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../common/theme';

const VerticalDivider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: '100%',
    borderLeftWidth: 1,
    borderColor: theme.colors.gray,
  },
});

export default VerticalDivider;
