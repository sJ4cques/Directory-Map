import { StyleSheet, View } from 'react-native'
import React from 'react'
import Layout from './src/components/Layout'

// <Image source={require('./assets/waifu.jpg')} />



export default function App() {
  return (

    <View style={styles.container} >
      
    <Layout />
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
