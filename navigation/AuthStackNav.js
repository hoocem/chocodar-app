import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const AuthStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false, tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
