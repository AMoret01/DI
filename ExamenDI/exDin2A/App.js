/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { ElMeuItem } from './components/ElMeuItem';
import { ElTotal } from './components/ElTotal';

export class App extends Component {
  render() {
    return (
      <View style={styles.colorPrimari}>

        <ElMeuItem></ElMeuItem>
        <ElTotal></ElTotal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  colorPrimari: {
    backgroundColor: 'green',
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    padding: 5,
  },

});

export default App;

