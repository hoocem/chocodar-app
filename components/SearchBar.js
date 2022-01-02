import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../common/theme';

const {height} = Dimensions.get('window');

export const SearchBar = ({value, onChange, onSubmit, onClear}) => {
  return (
    <View style={styles.mainContainer}>
      <Ionicons name="search" size={20} color={theme.colors.darkGray} />
      <TextInput
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
        style={styles.input}
        placeholder="Search for products"
        placeholderTextColor={theme.colors.gray}
      />
      {!!value && (
        <TouchableOpacity onPress={onClear}>
          <Ionicons name="close" size={20} color={theme.colors.darkGray} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 10,
    height: height * 0.06,
    borderRadius: 30,
    backgroundColor: theme.colors.white,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
