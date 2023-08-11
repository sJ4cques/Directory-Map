import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/auth/Login';
import Register from '../Screens/auth/Register';
import ForgotPassword from '../Screens/auth/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='skyblue' />
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Login} />

            <Stack.Screen name="Pass" component={ForgotPassword} 
              options={() => ({
                headerTintColor: 'skyblue',
                headerBackTitleVisible: false,
                headerTitle: 'Back', 
                headerStyle: {
                
                }
              })}
            
            />
            <Stack.Screen name="Registro" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;