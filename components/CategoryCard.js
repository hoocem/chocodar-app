import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {theme} from '../common/theme';
import {buildImageUri} from '../helpers/urlHelpers';

const {height} = Dimensions.get('window');

const CategoryCard = ({category, navigateToCategory}) => {
  return (
    <TouchableOpacity
      delayPressIn={50}
      style={styles.mainContainer}
      onPress={() => navigateToCategory(category._id, category.name)}>
      <Text style={styles.title}>{category.name}</Text>
      <Image
        source={{
          uri: buildImageUri(category.image),
        }}
        style={styles.thumbnail}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    height: height * 0.37,
    width: '100%',
  },
  title: {
    marginVertical: 10,
    color: theme.colors.black,
    fontSize: 17,
    fontWeight: '700',
  },
  thumbnail: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gray',
  },
});

export default CategoryCard;
