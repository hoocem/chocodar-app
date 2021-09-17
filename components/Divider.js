import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../common/theme';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: theme.colors.gray,
  },
});

export default Divider;
