import {combineReducers} from 'redux';
import cartReducer from './cart/reducer';
import authReducer from './auth/reducer';

export default combineReducers({cartReducer, authReducer});
