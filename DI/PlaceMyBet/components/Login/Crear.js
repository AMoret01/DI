import React, { Component } from 'react';

import {
    Button,
} from 'react-native-elements';

export class Crear extends Component {

    render() {
        return (
            <Button 
            buttonStyle={{ borderWidth: 2, borderColor: '#70B603' , width: 233 , height: 57 , marginTop: 70}}
            title="Crear Cuenta"
            titleStyle={{ color: '#70B603', fontSize: 20}}
            type="outline"  
          />
        )
    }
}