import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../screens/Categories';
import SingleCategory from '../screens/SingleCategory';

const Stack = createNativeStackNavigator();

const CategoryStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllCategories"
        component={Categories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleCategory"
        component={SingleCategory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNav;
