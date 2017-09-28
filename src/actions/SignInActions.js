import { EMAIL_CHANGED, PASSWORD_CHANGED} from './types';
import firebase from 'firebase';

export const signInUser = (email, password) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
    // return () => {
    //     firebase.auth().signInWithEmailAndPassword(email,password)
    //     .then(()=>console.log(email,password));
    // };
};