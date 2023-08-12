import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Registrarse</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});