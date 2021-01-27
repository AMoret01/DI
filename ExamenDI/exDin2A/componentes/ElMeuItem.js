import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Item } from './Item'
export class ElMeuItem extends Component {
    render() {
        return (
            <View>
                <View>
                    <h1>Llistat:</h1>
                </View>
                <View style={{flex:1, backgroundColor: '#ff8000', borderColor: '#252850', padding: 10}}>
                    <Card containerStyle={{padding: 10}}>
                        <Item></Item>
                    </Card>
                </View>
            </View>
        )
    }
}
