import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Navigator from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
