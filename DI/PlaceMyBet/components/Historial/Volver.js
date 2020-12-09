import React, { Component } from 'react';

import {
    Button,
} from 'react-native-elements';

export class Volver extends Component {

    render() {
        return (
            <Button 
            buttonStyle={{ borderWidth: 2, borderColor: '#70B603' , width: 233 , height: 57 , marginTop: 30}}
            title="Volver"
            titleStyle={{ color: '#70B603', fontSize: 20}}
            type="outline"  
          />
        )
    }
}