import React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/component/login/LoginScreen';
import { Provider } from 'react-redux';

import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoginScreen />
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
