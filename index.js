/**
 * @format
 */

 import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import  { store } from './src/store/reducers';

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
