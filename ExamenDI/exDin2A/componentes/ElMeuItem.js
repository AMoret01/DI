

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Input, Button, Card} from 'react-native-elements';

export class ElMeuItem extends Component {

    constructor (props) { 
        super(props);
        this.state = {
            name: 'Cereals amb xocolata',
            description: 'Cereals farcits de xocolata',
            quantity: 2,
            category: 'Cereals',
            price: 5,
        }
    } 
    

    render() {
        return(
            <View >
            <View style={styles.sectionTitle}>                     
             <Text name={this.state.name}></Text>
             <Text description={this.state.description}></Text>
             <Text style= {{textAlign: 'right'}} preu={this.state.price}> Preu: </Text>           
              </View> 
            </View>
        );
    }
}

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