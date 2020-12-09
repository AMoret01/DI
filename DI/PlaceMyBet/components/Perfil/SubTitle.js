import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';

export class SubTitle extends Component {

    render() {
        return (
            <View>
                <Text style={{ color: '#70B603', fontSize: 24, marginBottom: 50 }}>
                    Datos sobre la cuenta
                </Text>
            </View>
        )
    }
}