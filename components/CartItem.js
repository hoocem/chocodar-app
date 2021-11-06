import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {buildImageUri} from '../helpers/urlHelpers';
import {theme} from '../common/theme';
import cartActions from '../redux/cart/actions';

const {height} = Dimensions.get('window');
const {incrementQuantity, decrementQuantity, removeItem} = cartActions;

const CartItem = ({product}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: buildImageUri(product.image),
        }}
        style={styles.thumbnail}
        resizeMode="center"
      />
      <View style={styles.details}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>
            {product.price * product.quantity} TND
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => dispatch(removeItem(product._id))}>
            <Entypo name="cross" color={theme.colors.gray} size={20} />
          </TouchableOpacity>
          <View style={styles.incDecContainer}>
            {product.quantity > 1 ? (
              <TouchableOpacity
                onPress={() => dispatch(decrementQuantity(product._id))}>
                <Entypo
                  name="circle-with-minus"
                  color={theme.colors.primay}
                  size={20}
                />
              </TouchableOpacity>
            ) : (
              <Entypo
                name="circle-with-minus"
                color="rgba(228, 105, 5, 0.5)"
                size={20}
              />
            )}
            <Text style={styles.quantity}>{product.quantity}</Text>
            {product.quantity < product.countInStock ? (
              <TouchableOpacity
                onPress={() => dispatch(incrementQuantity(product._id))}>
                <Entypo
                  name="circle-with-plus"
                  color={theme.colors.primay}
                  size={20}
                />
              </TouchableOpacity>
            ) : (
              <Entypo
                name="circle-with-plus"
                color="rgba(228, 105, 5, 0.5)"
                size={17}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 10,
    minHeight: height * 0.1,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
  },
  thumbnail: {
    flex: 1,
  },
  details: {
    flex: 2,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: theme.colors.darkGray,
    fontWeight: '500',
  },
  price: {
    color: theme.colors.primay,
    fontWeight: '500',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
  },
  incDecContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 5,
    fontSize: 16,
    color: theme.colors.darkGray,
  },
  deleteBtn: {
    alignSelf: 'flex-end',
  },
  inactive: {
    opacity: 0.5,
  },
});

export default CartItem;
