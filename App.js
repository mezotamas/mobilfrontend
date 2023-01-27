import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Keres from './Kereses';
import Keresidezet from './Keresesidezet';
import Felvitel from './Felvitel';
import Velemeny from './Velemeny';
import Stats from './Statisztika';
import Nevjegy from './Nevjegy';




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
        <Drawer.Screen name="Keresés" component={Keres_lap} />
        <Drawer.Screen name="Idézet keresése" component={Keresidezet_lap} />
        
        <Drawer.Screen name="Felvitel" component={Felvitel_lap} />
        <Drawer.Screen name="Vélemények" component={Velemeny_lap} />
        <Drawer.Screen name="Statisztika" component={Stats_lap} />
        <Drawer.Screen name="Névjegy" component={Nevjegy_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
