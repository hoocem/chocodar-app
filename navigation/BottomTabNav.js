import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNav from '../navigation/HomeStackNav';
import CategoryStackNav from '../navigation/CategoryStackNav';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeNav" component={HomeStackNav} />
      <Tab.Screen name="Categories" component={CategoryStackNav} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
