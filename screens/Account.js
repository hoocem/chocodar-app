import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import authActions from '../redux/auth/actions';

const {setUserContext} = authActions;

const Account = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(setUserContext(null))}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
