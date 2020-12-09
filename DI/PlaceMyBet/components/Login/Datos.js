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
                        placeholder='Nombre'
                    />
                </View>
                <View>
                    <Input
                        placeholder='Apellidos'
                    />
                </View>
                <View>
                    <Input
                        placeholder='Edad'
                    />
                </View>
                <View>
                    <Input
                        placeholder='Email'
                    />
                </View>
                <View>
                    <Input
                        placeholder='Num.Tarjeta'
                        secureTextEntry={true}
                    />
                </View>
            </View>
        )
    }
}
