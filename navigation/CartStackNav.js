import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';

const Stack = createNativeStackNavigator();

const CartStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
    </Stack.Navigator>
  );
};

export default CartStackNav;
