import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ActivityIndicator,
} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
    Header,
    Image,
    Avatar,
    Input,
    Button,
    Card,
    Icon,
} from 'react-native-elements';


export default class Login extends Component {

    render() {
        return (
            <View>
                <View>
                    <Header
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
                    />
                </View>
                <View>
                    <View>
                        <Input
                            placeholder='Nombre'
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Apellidos'
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Edad'
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Email'
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Num.Tarjeta'
                            secureTextEntry={true}
                        />
                    </View>
                    
                </View>
            </View>
        )
    }
}