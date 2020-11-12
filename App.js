/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
const App: () => React$Node = () => {
  return (
    <View>
      <Header
        rightComponent={<Image
          source={{ uri: 'https://i.imgur.com/K3twA0U.png' }}
          style={{ width: 50, height: 50 }}
        />}
        centerComponent={{ text: 'PlaceMyBet', style: { color: '#70B603', fontSize: 34 } }}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          marginBottom: 45,
        }}
        
      />
      <View>
        <View>
          <Text style={{ color: '#70B603', fontSize: 30, marginBottom: 70 }}>
            Apuestas <Icon name='bar-chart' type='fontawesome' color='#70B603' />
          </Text>
        </View>
      </View>

      <View style={{alignItems: "center"}}>
        <View>
          <Button 
            buttonStyle={{ borderWidth: 2, borderColor: '#70B603' , width: 293 , height: 54 , marginBottom: 20}}
            title="Valencia vs Español  17/05/2020"
            titleStyle={{ color: '#70B603', fontSize: 20}}
            type="outline"  
          />
        </View>
        <View>
          <Button 
            buttonStyle={{ borderWidth: 2, borderColor: '#70B603' , width: 293 , height: 54 , marginBottom: 20}}
            title="Madrid vs Levante 20/05/2020"
            titleStyle={{ color: '#70B603', fontSize: 20}}
            type="outline"  
          />
        </View>
        <View>
          <Button 
            buttonStyle={{ borderWidth: 2, borderColor: '#70B603' , width: 293 , height: 54 , marginBottom: 20}}
            title="Athletic vs Barcelona  25/05/2020"
            titleStyle={{ color: '#70B603', fontSize: 20}}
            type="outline"  
          />
        </View>
        <View>
          <Button 
            buttonStyle={{ borderWidth: 2, borderColor: '#70B603' , width: 293 , height: 54 , marginBottom: 70}}
            title="Betis vs Sevilla       01/06/2020"
            titleStyle={{ color: '#70B603', fontSize: 20}}
            type="outline"  
          />
        </View>
      </View>
      <View style={{alignItems: "center"}}>
      <Button 
            buttonStyle={{ borderWidth: 2, borderColor: '#70B603' , width: 219 , height: 53}}
            title="Volver"
            titleStyle={{ color: '#70B603', fontSize: 27}}
            type="outline"  
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
