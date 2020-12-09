import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import {
    Button,
} from 'react-native-elements';

export class Opciones extends Component {

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 1, borderColor: '#70B603', width: 171, height: 44, marginBottom: 20 }}
                        title="Confirmar"
                        titleStyle={{ color: '#70B603', fontSize: 27 }}
                        type="outline"
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 1, borderColor: '#70B603', width: 171, height: 44, marginBottom: 20 }}
                        title="Historial"
                        titleStyle={{ color: '#70B603', fontSize: 27 }}
                        type="outline"
                    />
                </View>
            </View>
        )
    }
}