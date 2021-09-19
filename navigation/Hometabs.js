import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CategoryStackNav from '../navigation/CategoryStackNav';

const Tab = createBottomTabNavigator();

const Hometabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={CategoryStackNav} />
    </Tab.Navigator>
  );
};

export default Hometabs;
