import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import {Titulo} from '../components/General/Titulo';
import { Crear } from '../components/Login/Crear';
import {Datos} from '../components/Login/Datos';

export class Login extends Component {

    render() {
        return (
            <View>
                <View>
                    <Titulo></Titulo>
                </View>
                <View>
                   <Datos></Datos>                   
                </View>
                <View style={{ alignItems: "center" }}>
                   <Crear></Crear>                   
                </View>
            </View>
        )
    }
}