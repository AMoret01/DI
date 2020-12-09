import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import { Titulo } from '../components/General/Titulo';
import { Inicio } from '../components/PagPrincipal/Inicio';
import { Opciones } from '../components/PagPrincipal/Opciones';

export class PagPrincipal extends Component {

    render() {
        return (
            <View>
                <View>
                    <View>
                        <Titulo></Titulo>
                    </View>
                    <View>
                        <Inicio></Inicio>
                    </View>
                    <View>
                        <Opciones></Opciones>
                    </View>
                </View>
            </View>
        )
    }
}