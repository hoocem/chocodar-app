import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AuthStackNav from '../navigation/AuthStackNav';
import authActions from '../redux/auth/actions';

const {setUserContext} = authActions;

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer);

  return user && user.token ? (
    <View>
      <TouchableOpacity onPress={() => dispatch(setUserContext(null))}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <AuthStackNav />
  );
};

export default Account;
