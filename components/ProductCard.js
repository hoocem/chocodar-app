import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../common/theme';
import {buildImageUri} from '../helpers/urlHelpers';
import cartActions from '../redux/cart/actions';

const {width, height} = Dimensions.get('window');
const {addItem, incrementQuantity, decrementQuantity, removeItem} = cartActions;

const ProductCard = ({product, displayDetails}) => {
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  const renderActionBtn = () => {
    const index = cart.findIndex(prod => prod._id === product._id);

    if (index === -1) {
      return (
        <TouchableOpacity
          delayPressIn={50}
          style={styles.actionButton}
          onPress={() => {
            dispatch(addItem(product));
          }}>
          <Text style={styles.actionButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.incDecBtnsContainer}>
        <TouchableOpacity
          style={styles.incDecBtn}
          onPress={() => {
            if (cart[index].quantity === 1) {
              dispatch(removeItem(product._id));
            } else {
              dispatch(decrementQuantity(product._id));
            }
          }}>
          <Entypo name="minus" color={theme.colors.white} size={20} />
        </TouchableOpacity>
        <Text style={styles.quantity}>{cart[index].quantity}</Text>
        {cart[index].quantity < product.countInStock ? (
          <TouchableOpacity
            style={styles.incDecBtn}
            onPress={() => dispatch(incrementQuantity(product._id))}>
            <Entypo name="plus" color={theme.colors.white} size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.inactiveBtn}>
            <Entypo name="plus" color={theme.colors.white} size={20} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity
      delayPressIn={50}
      style={styles.mainContainer}
      onPress={() => displayDetails(product._id)}>
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
        {renderActionBtn()}
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
  incDecBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.0578,
    width: '100%',
  },
  incDecBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.0578,
    width: height * 0.0578,
    backgroundColor: theme.colors.primay,
    borderRadius: 8,
  },
  quantity: {
    color: theme.colors.darkGray,
    fontWeight: '500',
    fontSize: 16,
  },
  inactiveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.0578,
    width: height * 0.0578,
    backgroundColor: 'rgba(228, 105, 5, 0.5)',
    borderRadius: 8,
  },
});

export default ProductCard;
