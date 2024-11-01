// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JobProvider } from './JobContext';
import TodoList from './TodoList';
import AddOrUpdateJob from './AddOrUpdateJob';
import { Provider } from 'react-redux';
import store from './store';
const Stack = createStackNavigator();

export default function App() { 
  return (
     <Provider store={store}>

    // <JobProvider>  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen name="TodoList" component={TodoList} />
          <Stack.Screen name="AddOrUpdateJob" component={AddOrUpdateJob} />
        </Stack.Navigator>
      </NavigationContainer>
    // </JobProvider>
    </Provider>
  );
}
