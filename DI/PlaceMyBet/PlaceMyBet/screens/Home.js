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

export class Home extends Component {

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <View>
                    <Header
                        centerComponent={{ text: 'PlaceMyBet', style: { color: '#70B603', fontSize: 47, width: 285, height: 53,fontWeight: "bold" } }}

                        containerStyle={{
                            backgroundColor: '#fff',
                            justifyContent: 'space-around',
                            marginTop: 100,
                            marginBottom: 100,
                        }}
                    />
                </View>
                <View>
                    <Image
                        source={{ uri: 'https://i.imgur.com/K3twA0U.png' }}
                        style={{ width: 289, height: 176 }}
                        containerStyle={{
                            backgroundColor: '#fff',
                            justifyContent: 'space-around',
                            marginBottom: 100,
                        }}
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ borderWidth: 2, borderColor: '#70B603',backgroundColor: '#70B603', width: 233, height: 57, marginBottom: 20 }}
                        title="Entrar"
                        titleStyle={{ color: '#95F204', fontSize: 27,fontWeight: "bold" }}
                        type="outline"
                        
                    />
                </View>
            </View>
        )
    }
}