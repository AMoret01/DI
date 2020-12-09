import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import { Titulo } from '../components/General/Titulo';
import { SubTitle } from '../components/ParametrosApuestas/SubTitle';
import { Tabla } from '../components/ParametrosApuestas/Tabla';
import { Volver } from '../components/Historial/Volver';


export default class ParametrosApuestas extends Component {

    render() {
        return (
            <View>
                <View>
                    <Titulo></Titulo>
                </View>
                <View>
                    <SubTitle></SubTitle>
                </View>
                <View style={{ height: 80 }}>
                    <Tabla/>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Volver></Volver>
                </View>
            </View>
        )
    }
}