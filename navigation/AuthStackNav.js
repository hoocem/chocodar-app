import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Account from '../screens/Account';

const Stack = createNativeStackNavigator();

const AuthStackNav = () => {
  const user = useSelector(state => state.authReducer);

  return user && user.token ? (
    <Account />
  ) : (
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
