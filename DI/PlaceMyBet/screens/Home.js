import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ActivityIndicator,
} from 'react-native';

import { Titulo } from '../components/Home/Titulo';
import { Imagen } from '../components/Home/Imagen';
import { Boton } from '../components/Home/Boton';

export class Home extends Component {

    render() {
        return (
            <View>
                <View style={{ alignItems: "center" }}>
                    <View>
                        <Titulo></Titulo>
                    </View>
                    <View>
                        <Imagen></Imagen>
                    </View>
                    <View>
                        <Boton></Boton>
                    </View>
                </View>
            </View>
        )
    }
}