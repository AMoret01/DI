import React, { Component } from 'react';

import {
    Header,
    Image,
} from 'react-native-elements';

export class Titulo extends Component {

    render() {
        return (<Header
            rightComponent={<Image
                source={{ uri: 'https://i.imgur.com/K3twA0U.png' }}
                style={{ width: 50, height: 50 }}
            />}
            centerComponent={{ text: 'PlaceMyBet', style: { color: '#70B603', fontSize: 34, fontWeight: "bold" } }}
            containerStyle={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                marginBottom: 45,
            }}
        />)

    }
}