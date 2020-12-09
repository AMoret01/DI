import React, { Component } from 'react';

import {
    Header,
} from 'react-native-elements';

export class Titulo extends Component {

    render() {
        return (
            <Header
                centerComponent={{ text: 'PlaceMyBet', style: { color: '#70B603', fontSize: 47, width: 285, height: 53, fontWeight: "bold" } }}

                containerStyle={{
                    backgroundColor: '#fff',
                    justifyContent: 'space-around',
                    marginTop: 100,
                    marginBottom: 100,
                }}
            />
        )

    }
}