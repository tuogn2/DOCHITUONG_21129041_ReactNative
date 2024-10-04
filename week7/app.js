import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createContext, useContext, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Todo from './Todo';
const Stack = createNativeStackNavigator();
export const NameContext = createContext();
export default function App() {
  const [name, setname] = useState('');
  return (
    <NameContext.Provider value={{ name, setname }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Todo"
            component={Todo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NameContext.Provider>
  );
}

const styles = StyleSheet.create({});
