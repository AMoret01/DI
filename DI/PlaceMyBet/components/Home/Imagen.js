import React, { Component } from 'react';

import {
Image,
} from 'react-native-elements';

export class Imagen extends Component {

    render() {
        return (
            <Image
                source={{ uri: 'https://i.imgur.com/K3twA0U.png' }}
                style={{ width: 289, height: 176 }}
                containerStyle={{
                    backgroundColor: '#fff',
                    justifyContent: 'space-around',
                    marginBottom: 100,
                }}
            />
        )

    }
}