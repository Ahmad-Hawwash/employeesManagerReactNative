import {combineReducers} from 'redux';
import AuthReducer from './SignInReducer';

export default combineReducers({
    signIn: AuthReducer
});