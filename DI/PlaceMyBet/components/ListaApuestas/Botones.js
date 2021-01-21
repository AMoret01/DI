import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import {
    Button,
} from 'react-native-elements';

export class Botones extends Component {
    constructor(props){
        super(props)
        
    }

    elementPolsat(unElementDeLaLlistaClickat){
        return(alert('Has seleccionat: '+unElementDeLaLlistaClickat.partidos.title))
    }

    render() {
        return (
            <View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 2, borderColor: '#70B603', width: 293, height: 54, marginBottom: 20 }}
                        title={this.props.partidos.item.title}
                        titleStyle={{ color: '#70B603', fontSize: 20 }}
                        type="outline"
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 2, borderColor: '#70B603', width: 293, height: 54, marginBottom: 20 }}
                        title={this.props.partidos.item.title}
                        titleStyle={{ color: '#70B603', fontSize: 20 }}
                        type="outline"
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 2, borderColor: '#70B603', width: 293, height: 54, marginBottom: 20 }}
                        title={this.props.partidos.item.title}
                        titleStyle={{ color: '#70B603', fontSize: 20 }}
                        type="outline"
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 2, borderColor: '#70B603', width: 293, height: 54, marginBottom: 70 }}
                        title={this.props.partidos.item.title}
                        titleStyle={{ color: '#70B603', fontSize: 20 }}
                        type="outline"
                    />
                </View>
                <View style={{ alignItems: "center" }}>
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