import {createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default createStore(persistReducer(persistConfig, rootReducer));
