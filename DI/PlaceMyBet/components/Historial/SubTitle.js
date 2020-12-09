import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

export class SubTitle extends Component {

    render() {
        return (
            <View>
                <Text style={{ color: '#70B603', fontSize: 24,width: 233, height: 31, marginBottom: 70 }}>
                    Apuestas Realizadas <Icon name='balance-scale' type='fontawesome' color='#70B603' />
                </Text>
            </View>
        )
    }
}