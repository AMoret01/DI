import React, { Component } from 'react';

import {
    View,
    FlatList,
} from 'react-native';
import {
    Button,
} from 'react-native-elements';

import { Titulo } from '../components/Home/Titulo';
import { Botones } from '../components/ListaApuestas/Botones';
import { SubTitle } from '../components/ListaApuestas/SubTitle';


export class ListaApuestas extends Component {
    constructor(props) {
        super(props)
        //dadesAMostrar com a variable de l'estat de la classe
        this.state = {
            partidos: [{ title: 'Valencia vs Español  17/05/2020' }, { title: 'Madrid vs Levante 20/05/2020' }, { title: 'Athletic vs Barcelona  25/05/2020' },
            { title: 'Betis vs Sevilla       01/06/2020' },
            ]
        }
    }
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
                    <FlatList
                        data={this.state.partidos}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ padding: 5 }}
                        renderItem={(item) => (<Botones partidos={item} />)}
                    />
                    <Button
                        buttonStyle={{ borderWidth: 2, borderColor: '#70B603', width: 219, height: 53 }}
                        title="Volver"
                        titleStyle={{ color: '#70B603', fontSize: 27 }}
                        type="outline"
                    />
                </View>
            </View>
        )
    }
}