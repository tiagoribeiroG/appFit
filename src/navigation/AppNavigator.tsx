import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'MasterFit' }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes da Marmita' }} />
    </Stack.Navigator>
  );
}
