import React from 'react';
import { Pressable } from 'react-native';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';



var height = Dimensions.get("window").height
var width = Dimensions.get("window").width


const Login = ({ navigation }) => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>


      <Pressable style={styles.BtnGeneral2}
      onPress = { () => {
          navigation.navigate ('Pass')
      }} >
        <Text>Forgot Password?</Text>
      </Pressable>

      <Pressable style={styles.BtnGeneral}>
        <Text>Register</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
    BtnGeneral:{
        height: height * 0.025,
        width: width * 0.2,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.02,
        marginBottom: height * 0.009
    },

    BtnGeneral2:{
        height: height * 0.025,
        width: width * 0.4,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.02,
        marginBottom: height * 0.009
    }




});