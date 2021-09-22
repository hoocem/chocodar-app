import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {theme} from '../common/theme';

const SortBy = ({onSelect, onShowModal}) => {
  return (
    <TouchableOpacity
      onPress={onShowModal}
      activeOpacity={1.0}
      style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <Text style={styles.listheader}>Sort By</Text>
        <TouchableOpacity
          onPress={() => {
            onSelect('name.asc');
            onShowModal();
          }}>
          <Text style={styles.listItem}>Relevance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onSelect('price.asc');
            onShowModal();
          }}>
          <Text style={styles.listItem}>Price (lowest first)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onSelect('price.desc');
            onShowModal();
          }}>
          <Text style={styles.listItem}>Price (highest first)</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    zIndex: 5,
  },
  listContainer: {
    width: '100%',
    backgroundColor: theme.colors.white,
  },
  listheader: {
    padding: 10,
    color: theme.colors.primay,
    fontSize: 16,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
  },
  listItem: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: theme.colors.darkGray,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SortBy;
