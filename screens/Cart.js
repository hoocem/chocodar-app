import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../common/theme';
import SecondaryHeader from '../components/SecondaryHeader';
import CartItem from '../components/CartItem';

const {height} = Dimensions.get('window');

const Cart = ({navigation}) => {
  const cart = useSelector(state => state.cartReducer);

  return (
    <>
      <SecondaryHeader
        name="Cart"
        onGoBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.contentContainer}>
        {!cart.length && (
          <>
            <View style={styles.iconOuterBg}>
              <View style={styles.iconBg}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="cart-outline"
                    color={theme.colors.white}
                    size={50}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <Text style={styles.callToActionText}>
              Start adding your favorite items to the cart now
            </Text>
            <TouchableOpacity
              delayPressIn={50}
              style={styles.actionButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.actionButtonText}>EXPLORE ALL PRODUCTS</Text>
            </TouchableOpacity>
          </>
        )}
        {!!cart.length && (
          <FlatList
            data={cart}
            renderItem={({item}) => <CartItem product={item} />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.lightGray,
  },
  iconContainer: {
    alignSelf: 'center',
    zIndex: 1,
    padding: 10,
    backgroundColor: theme.colors.primay,
    borderRadius: 40,
  },
  iconBg: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    backgroundColor: 'rgba(228, 105, 5, 0.5)',
    borderRadius: 70,
  },
  iconOuterBg: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height * 0.1,
    padding: 18,
    backgroundColor: 'rgba(228, 105, 5, 0.2)',
    borderRadius: 70,
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 10,
    color: theme.colors.primay,
    fontSize: 17,
    fontWeight: '700',
  },
  callToActionText: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 15,
    fontWeight: '400',
    color: theme.colors.darkGray,
  },
  actionButton: {
    marginTop: 60,
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
  flatListContent: {
    flex: 1,
  },
});

export default Cart;
