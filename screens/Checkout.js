import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import AuthStackNav from '../navigation/AuthStackNav';

const Checkout = () => {
  const user = useSelector(state => state.authReducer);

  return user && user.token ? (
    <View>
      <Text>checkout</Text>
    </View>
  ) : (
    <AuthStackNav />
  );
};

export default Checkout;
