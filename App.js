import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import LoginForm from './src/LoginForm';
import reducers from './src/Reducers';


export default class App extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBOhtYlrxU-BaewkUfAmQznS4oAd8W3SMI',
      authDomain: 'manager-773da.firebaseapp.com',
      databaseURL: 'https://manager-773da.firebaseio.com',
      projectId: 'manager-773da',
      storageBucket: 'manager-773da.appspot.com',
      messagingSenderId: '873433485013'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers);    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
