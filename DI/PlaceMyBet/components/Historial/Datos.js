import React, { Component } from 'react';

import {
View,
} from 'react-native';

import {   
Input,
} from 'react-native-elements';

export class Datos extends Component {

    render() {
        return (
            <View>
                <View>
                    <Input
                        placeholder='Monedero Actual'
                        secureTextEntry={true}
                    />
                </View>
            </View>
        )
    }
}