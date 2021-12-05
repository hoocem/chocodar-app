import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../common/theme';

const RadioButton = ({selected, name, style, textStyle, onPress}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.outline,
          selected && {borderColor: theme.colors.primay},
        ]}>
        {selected && <View style={styles.select} />}
      </TouchableOpacity>
      <Text style={[styles.text, textStyle]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outline: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: theme.colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primay,
  },
  text: {
    marginLeft: 6,
    fontSize: 18,
    color: theme.colors.darkGray,
  },
});

export default RadioButton;
