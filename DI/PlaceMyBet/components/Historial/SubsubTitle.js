import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

export class SubsubTitle extends Component {

    render() {
        return (
            <View>
                <Text style={{ color: '#70B603', fontSize: 24,width: 233, height: 31, marginTop: 200, marginBottom: 20 }}>
                    Monedero Actual 
                </Text>
            </View>
        )
    }
}