import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Elso from './Elso';
import Keres from './Kereses';
import Keresidezet from './Keresesidezet';
import Felvitel from './Felvitel';
import Velemeny from './Velemeny';
import Stats from './Statisztika';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function Elso_lap({ navigation }) {
  return (
    <Elso/>
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

function Keres_lap({ navigation }) {
  return (
    <Keres/>
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


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Első" component={Elso_lap} />
        <Drawer.Screen name="Keresés" component={Keres_lap} />
        <Drawer.Screen name="Idézet keresése" component={Keresidezet_lap} />
        
        <Drawer.Screen name="Felvitel" component={Felvitel_lap} />
        <Drawer.Screen name="Vélemények" component={Velemeny_lap} />
        <Drawer.Screen name="Statisztika" component={Stats_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
