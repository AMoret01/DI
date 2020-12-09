import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import {

    Text,
} from 'react-native-elements';

export class Inicio extends Component {

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <View>
                    <Text h1 h1Style={{ color: '#70B603', fontSize: 33, width: 185, height: 42, fontWeight: "bold", marginBottom: 70 }}>
                        Bienvenido!
                    </Text>
                </View>
                <View>
                    <Text h2 h2Style={{ color: '#70B603', fontSize: 17, width: 269, height: 22, fontWeight: "bold", marginBottom: 70 }}>
                        Se ha registrado correctamente
                    </Text>
                </View>
                <View>
                    <Text h3 h3Style={{ color: '#70B603', fontSize: 22, width: 269, height: 28, fontWeight: "bold", marginBottom: 70, marginLeft: 70 }}>
                        Que desea hacer?
                    </Text>
                </View>

            </View>
        )

    }
}