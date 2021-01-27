/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ElMeuItem } from './componentes/ElMeuItem';

export class App extends React.Component {
  render() {
    return (
      <View>
        <ElMeuItem></ElMeuItem>
      </View>
    );
  };
};

export default App;
