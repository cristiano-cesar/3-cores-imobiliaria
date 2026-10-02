import React from 'react';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen';
import CadastroImovelScreen from '../pages/CadastroImovelScreen';
import DetalhesImovelScreen from '../pages/DetalhesImovelScreen';

import { Imovel } from '../data/imoveis';

// Define quais telas existem na aplicação
export type RootStackParamList = {
  Home: undefined;

  CadastroImovel: undefined;

  DetalhesImovel: {
    imovel: Imovel;
  };
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="CadastroImovel"
        component={CadastroImovelScreen}
      />

      <Stack.Screen
        name="DetalhesImovel"
        component={DetalhesImovelScreen}
      />
    </Stack.Navigator>
  );
}