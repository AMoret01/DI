import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import {Titulo} from '../components/General/Titulo';
import { SubTitle } from '../components/Perfil/SubTitle';
import {Datos} from '../components/Login/Datos';
import { Opciones } from '../components/Perfil/Opciones';


export class Perfil extends Component {

    render() {
        return (
            <View>
                <View>
                    <Titulo></Titulo>
                </View>
                <View style={{ alignItems: "center" }}>
                    <SubTitle></SubTitle>
                </View>
                <View>
                   <Datos></Datos>                   
                </View>
                <View>
                   <Opciones></Opciones>                   
                </View>
            </View>
        )
    }
}