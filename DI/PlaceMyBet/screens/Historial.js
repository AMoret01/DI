import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import { Titulo } from '../components/General/Titulo';
import { SubTitle } from '../components/Historial/SubTitle';
import { Tabla } from '../components/Historial/Tabla';
import { SubsubTitle } from '../components/Historial/SubsubTitle';
import { Datos } from '../components/Historial/Datos';
import { Volver } from '../components/Historial/Volver';


export class Historial extends Component {

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
                <View>
                    <SubsubTitle></SubsubTitle>
                </View>
                <View>
                    <Datos></Datos>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Volver></Volver>
                </View>

            </View>
        )
    }
}