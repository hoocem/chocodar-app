import React from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../common/theme';

const {height} = Dimensions.get('window');

const AuthField = ({value, placeholder, iconName, prefix, onChange}) => {
  return (
    <View style={styles.mainContainer}>
      <Ionicons
        name={iconName}
        size={25}
        color={theme.colors.gray}
        style={styles.icon}
      />
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 5,
    marginTop: 40,
    paddingLeft: 5,
    paddingRight: 10,
    height: height * 0.06,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingBottom: 0,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  prefix: {
    fontSize: 18,
    paddingBottom: 0,
    marginLeft: 5,
    marginBottom: 2,
    color: theme.colors.gray,
  },
});

export default AuthField;
