

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const users = [
    {
       name: 'Cereals',
       description: 'Cereals farcits de xocolata',
       quantity: 2,
       category: 'Cereals',
       price: 5,
    },

   ]

export class ElMeuItem extends Component {
    render() {
        return (
            <View style={{padding: 10}}>
              <View style={styles.directo}>
                <View style={{alignItems: 'center'}}>
                  <Text>{this.users.name}</Text>
                  <Text>{this.users.description}</Text>
                  <Text>{this.users.quantity}</Text>
                  <Text>{this.users.category}</Text>
                  <Text>{this.users.price}</Text>
                </View>
              </View>
            </View>
        );
      }
}
const styles = StyleSheet.create({
  directo: {
    marginTop: 20,
    marginLeft: 25,
    backgroundColor: '#ff8000',
    borderColor: '#252850',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});