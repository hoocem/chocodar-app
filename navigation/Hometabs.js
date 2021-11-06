import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import CategoryStackNav from '../navigation/CategoryStackNav';
import Cart from '../screens/Cart';
import {theme} from '../common/theme';

const Tab = createBottomTabNavigator();

const Hometabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primay,
        tabBarInactiveTintColor: '#606060',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryStackNav}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="category" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <Ionicons name="cart" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Hometabs;
