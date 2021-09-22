import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../common/theme';

const SortBy = ({selectedIndex, onSelect, onShowModal}) => {
  const sortValues = [
    {label: 'Relevance', value: 'name.asc'},
    {label: 'Price (lowest first)', value: 'price.asc'},
    {label: 'Price (highest first)', value: 'price.desc'},
  ];

  return (
    <TouchableOpacity
      onPress={onShowModal}
      activeOpacity={1.0}
      style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <Text style={styles.listheader}>Sort By</Text>
        {sortValues.map((value, index) => (
          <TouchableOpacity
            key={value.value}
            style={styles.listItemContainer}
            onPress={() => {
              onSelect(value.value, index);
              onShowModal();
            }}>
            <Text style={styles.listItem}>{`${value.label} ${index}`}</Text>
            {index === selectedIndex && (
              <FontAwesome5
                name="check"
                size={20}
                color={theme.colors.primay}
              />
            )}
          </TouchableOpacity>
        ))}
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
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
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
