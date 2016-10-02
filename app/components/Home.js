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
          source={{uri: this.props.path}}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.props.path}}
        />
      </View>
    )
  }
}

export default Home