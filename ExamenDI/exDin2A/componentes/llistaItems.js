import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import { ElMeuItem } from './ElMeuItem';


export class llistaItems extends Component {
    constructor (props) { 
        super(props);
        
    }
  render() {
        return(
            <View>
             
            <View style={styles.sectionTitle}>                     
             <Text 
             name={this.props.cereales.item.name}
             description={this.props.cereales.item.description}
             preu={this.props.cereales.item.price}
             />          
              </View> 
            </View>
        );
    }
}