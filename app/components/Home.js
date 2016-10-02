import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



class Home extends Component {
  render() {
    return (
      <View>
        <Text>Hello Text</Text>
        <Text>this.props.path is {this.props.path}</Text>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: this.props.path}}
        />
      </View>
    )
  }
}

export default Home