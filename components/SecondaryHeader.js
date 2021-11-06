import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../common/theme';

const SecondaryHeader = ({name, onGoBack}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onGoBack}>
        <Ionicons name="arrow-back" size={35} color={theme.colors.white} />
      </TouchableOpacity>
      <Text style={styles.nameText}>{name}</Text>
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
  nameText: {
    marginLeft: 10,
    color: theme.colors.white,
    fontSize: 22,
    fontWeight: '700',
  },
});

export default SecondaryHeader;
