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
  FlatList,
  StatusBar,
} from 'react-native';
import { ElMeuItem } from './componentes/ElMeuItem';


import { llistaItems} from './componentes/llistaItems';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cereales: [{ name: 'Cereals amb xocolata'}, { name: 'Hamburguesa amb formatge' }, { name: 'Aigua natural' },
      { description: 'Cereals farcits de xocolata' }, { description: 'Hamburguesa bona i saludable' },
      { description: 'Aigua de un bassal de el Himalaya' }, { price: '5' }, { price: '15' }, { price: '5' },
      ]
    }
  }
  render() {
    return (
      <View>
        <View>
          <View>
            <Text style={[{ fontSize: 24 }, styles.colorSecundari2]}>Llistat:</Text>
          </View>
          <FlatList
            data={this.state.cereales}
            keyExtractor={(item, index) => index.toString()}
            style={{ padding: 10 }}
            renderItem={(item) => (<ElMeuItem cereales={item} />)}
          />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({

  colorSecundari2: {
    color: 'black',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: '#ff9906',
  },

});
export default App;

