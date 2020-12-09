import React, { Component } from 'react';

import {
    Button,
} from 'react-native-elements';

export class Boton extends Component {

    render() {
        return (
            <Button
                buttonStyle={{ borderWidth: 2, borderColor: '#70B603', backgroundColor: '#70B603', width: 233, height: 57, marginBottom: 20 }}
                title="Entrar"
                titleStyle={{ color: '#95F204', fontSize: 27, fontWeight: "bold" }}
                type="outline"

            />
        )
    }
}