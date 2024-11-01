// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JobProvider } from './JobContext';
import TodoList from './TodoList';
import AddOrUpdateJob from './AddOrUpdateJob';

const Stack = createStackNavigator();

export default function App() {
  return (
    <JobProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen name="TodoList" component={TodoList} />
          <Stack.Screen name="AddOrUpdateJob" component={AddOrUpdateJob} />
        </Stack.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
}
