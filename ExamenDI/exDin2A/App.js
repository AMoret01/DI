/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { ElMeuItem } from './componentes/ElMeuItem';

class App extends Component {
  render() {
    return (
      <>
        <View>
        <ElMeuItem></ElMeuItem>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#008000',
  },
});

export default App;

