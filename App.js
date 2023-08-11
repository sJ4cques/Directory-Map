import { StyleSheet, View } from 'react-native'
import React from 'react'
import Layout from './src/Screens/Layout'
import Login from './src/Screens/auth/Login'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './src/navigations/AuthNavigator'

// <Image source={require('./assets/waifu.jpg')} />



export default function App() {
  return (

    <View style = {{flex:1}}>
      <AuthNavigator />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
