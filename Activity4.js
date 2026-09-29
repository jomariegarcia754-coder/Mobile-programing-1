import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6F4E37',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'CoffeeHouse' }}
        />

        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: 'Coffee Menu' }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Coffee Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}