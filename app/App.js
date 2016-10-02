/**
 * Photo Reminder App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import CameraCall from './components/Camera'
import Home from './components/Home'

class PhotoReminder extends Component {
  render() {
    return ( <Router>
      <Scene key="root">
        <Scene key="camera" component={CameraCall} initial={true} hideNavBar={true} title="camera"></Scene>
        <Scene key="Home" component={Home} hideNavBar={true} title="image"></Scene>
      </Scene>
      </Router>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default PhotoReminder