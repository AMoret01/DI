import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import { Titulo } from '../components/Home/Titulo';
import { Botones } from '../components/ListaApuestas/Botones';
import { SubTitle } from '../components/ListaApuestas/SubTitle';


export class ListaApuestas extends Component {

    render() {
        return (
            <View>
                <View>
                    <Titulo></Titulo>
                </View>
                <View>
                    <SubTitle></SubTitle>
                </View>

                <View style={{ alignItems: "center" }}>
                    <Botones></Botones>
                </View>
            </View>
        )
    }
}