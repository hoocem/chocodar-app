import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {theme} from '../common/theme';
import {buildImageUri} from '../helpers/urlHelpers';

const {width, height} = Dimensions.get('window');

const ProductCard = ({product, displayDetails}) => {
  console.log('image = ', product.image);
  return (
    <TouchableOpacity
      delayPressIn={50}
      style={styles.mainContainer}
      onPress={() => displayDetails()}>
      <Image
        source={{
          uri: buildImageUri(product.image),
        }}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price} TND</Text>
        </View>
        <TouchableOpacity delayPressIn={50} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    height: height * 0.39,
    width: width * 0.46,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
  },
  thumbnail: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 5,
  },
  title: {
    color: theme.colors.darkGray,
    fontWeight: '400',
  },
  price: {
    marginTop: 10,
    color: theme.colors.black,
    fontWeight: '700',
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.0578,
    width: '100%',
    backgroundColor: theme.colors.primay,
    borderRadius: 10,
  },
  actionButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProductCard;
