import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../screens/ProductDetails';
import Search from '../screens/Search';
import Hometabs from '../navigation/Hometabs';

const Stack = createNativeStackNavigator();

const HomeStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={Hometabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false, tabBarVisible: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false, tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
