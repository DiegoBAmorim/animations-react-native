import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from '../screens/Home';
import { TabAnimatedScreen } from '../screens/TabAnimatedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='TabAnimated' component={TabAnimatedScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
