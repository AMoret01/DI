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
                        buttonStyle={{ borderWidth: 1, borderColor: '#70B603', width: 168, height: 40, marginBottom: 50 }}
                        title="Perfil"
                        titleStyle={{ color: '#70B603', fontSize: 22 }}
                        type="outline"
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 1, borderColor: '#70B603', width: 168, height: 40, marginBottom: 50 }}
                        title="Apuestas"
                        titleStyle={{ color: '#70B603', fontSize: 22 }}
                        type="outline"
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 1, borderColor: '#70B603', width: 168, height: 40, marginBottom: 50 }}
                        title="Volver"
                        titleStyle={{ color: '#70B603', fontSize: 22 }}
                        type="outline"
                    />
                </View>
            </View>
        )
    }
}