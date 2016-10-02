/**
 * Photo Reminder App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import { Provider, connect } from 'react-redux'
import { combineReducers } from 'redux';
import CameraCall from './components/Camera'
import Home from './components/Home'
import configureStore from './store/configureStore'

const store = configureStore()
const RouterWithRedux = connect()(Router)

class PhotoReminder extends Component {
  render() {
    return ( 
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="camera" component={CameraCall} initial={true} hideNavBar={true} title="camera"></Scene>
            <Scene key="Home" component={Home} hideNavBar={true} title="image"></Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default PhotoReminder