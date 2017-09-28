import { PASSWORD_CHANGED, EMAIL_CHANGED } from '../Actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log(action.payload)
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        // case USER_LOGIN_SUCCESS:
        //     return { ...state, user: action.payload, error: '', loading: false };
        // case USER_LOGIN_FAILED:
        //     return { ...state, error: 'Auth Failed', password: '', loading: false };
        // case LOGIN_USER:
        //     return { ...state, error: '', loading: true };
        default:
            return state;
    }
};
