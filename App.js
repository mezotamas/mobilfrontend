import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Kezdolap from './Welcome';
import Keresidezet from './Keresesidezet';
import Felvitel from './Felvitel';
import Velemeny from './Velemeny';
import Stats from './Statisztika';
import Nevjegy from './Nevjegy';

function Kezdo_lap({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , marginBottom:10}}>
      
      <Kezdolap/>
      
      <Text style={{bottom:10, fontSize:20}}>Lehetőségek:</Text>
      <View style={{marginTop:10}}>
        <Button 
        onPress={() => navigation.navigate('Idézet keresése')}
        title="Böngészés az igék között"
      />
      </View>
      
      
      <View style={{marginTop:10}}>
        <Button 
        onPress={() => navigation.navigate('Felvitel')}
        title="Adatok felvitele"
      />
      </View>
      
      <View style={{marginTop:10}}>
      <Button 
        onPress={() => navigation.navigate('Statisztika')}
        title="Statisztika"
      />
      </View>
      <View style={{marginTop:10}}>
        <Button 
        onPress={() => navigation.navigate('Vélemények')}
        title="Vélemények"
      />
      </View>
      <View style={{marginTop:10}}>
        <Button 
        onPress={() => navigation.navigate('Névjegy')}
        title="Névjegy"
      />
      </View>
      
    </View>
    
   
  );
}


function Keresidezet_lap({ navigation }) {
  return (
    <Keresidezet/>
  );
}
function Felvitel_lap({ navigation }) {
  return (
    <Felvitel/>
  );
}


function Velemeny_lap({ navigation }) {
  return (
    <Velemeny/>
  );
}
function Stats_lap({ navigation }) {
  return (
    <Stats/>
  );
}
function Nevjegy_lap({ navigation }) {
  return (
    <Nevjegy/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Kezdőlap" component={Kezdo_lap} />
      
        <Drawer.Screen name="Idézet keresése" component={Keresidezet_lap} />
        <Drawer.Screen name="Felvitel" component={Felvitel_lap} />
        <Drawer.Screen name="Vélemények" component={Velemeny_lap} />
        <Drawer.Screen name="Statisztika" component={Stats_lap} />
        <Drawer.Screen name="Névjegy" component={Nevjegy_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
