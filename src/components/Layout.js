import { StyleSheet, View, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import Local from './Local'
import IconV from './Icon'


var height = Dimensions.get("window").height
var width = Dimensions.get("window").width

const Layout = () => {
  
  return (
        <View style={styles.container}>

          <StatusBar backgroundColor='skyblue' />

            <Local 
              titleText={'Tienda 1'}
              position={styles.Tienda1}
              tamaño={styles.Tienda1T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 1.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'Tienda 2'}
              position={styles.Tienda2}
              tamaño={styles.Tienda2T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 2.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'Tienda 3'}
              position={styles.Tienda3}
              tamaño={styles.Tienda3T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 3.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'Tienda 4'}
              position={styles.Tienda4}
              tamaño={styles.Tienda4T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 4.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 5'}
              position={styles.Tienda5}
              tamaño={styles.Tienda5T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 5.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 6'}
              position={styles.Tienda6}
              tamaño={styles.Tienda6T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 6.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 7'}
              position={styles.Tienda7}
              tamaño={styles.Tienda7T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 7.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 8'}
              position={styles.Tienda8}
              tamaño={styles.Tienda8T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 8.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 9'}
              position={styles.Tienda9}
              tamaño={styles.Tienda9T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 9.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda10}
              tamaño={styles.Tienda10T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 10.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 10'}
              position={styles.Tienda10m}
              tamaño={styles.Tienda10Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 10.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 11'}
              position={styles.Tienda11}
              tamaño={styles.Tienda11T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 11.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 12'}
              position={styles.Tienda12}
              tamaño={styles.Tienda12T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 12.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 13'}
              position={styles.Tienda13}
              tamaño={styles.Tienda13T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 13.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 14'}
              position={styles.Tienda14}
              tamaño={styles.Tienda14T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 14.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 15'}
              position={styles.Tienda15}
              tamaño={styles.Tienda15T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 15.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda15m}
              tamaño={styles.Tienda15Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 15.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 16'}
              position={styles.Tienda16}
              tamaño={styles.Tienda16T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 16.'}
              textTitleModal={'HUNGRY DRAGON'}
            />                            

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: 'grey',
      height: height * 0.9 ,
      width: width * 0.9,
      flexDirection:'row',
      alignSelf:'center',
      flexWrap: 'wrap'
    },


    Tienda1:{
      left: width * 0.1,
      top: height * 0.01,
      position: 'absolute'
    },
    Tienda1T:{
      width: width * 0.50,
      height: height * 0.08,
    },

    Tienda2:{
      left: width * 0.1,
      top: height * 0.095,
      position: 'absolute'
    },
    Tienda2T:{
      width: width * 0.18,
      height: height * 0.04,
    },


    Tienda3:{
      left: width * 0.45,
      top: height * 0.095,
      position: 'absolute'
    },
    Tienda3T:{
      width: width * 0.15,
      height: height * 0.02,
    },

    Tienda4:{
      left: width * 0.45,
      top: height * 0.117,
      position: 'absolute'
    },
    Tienda4T:{
      width: width * 0.15,
      height: height * 0.02,
    },

    Tienda5:{
      left: width * 0.12,
      top: height * 0.15,
      position: 'absolute'
    },
    Tienda5T:{
      width: width * 0.09,
      height: height * 0.04,
    },


    Tienda6:{
      left: width * 0.215,
      top: height * 0.15,
      position: 'absolute'
    },
    Tienda6T:{
      width: width * 0.05,
      height: height * 0.035,
    },


    Tienda7:{
      left: width * 0.269,
      top: height * 0.15,
      position: 'absolute'
    },
    Tienda7T:{
      width: width * 0.05,
      height: height * 0.035,
    },

    Tienda8:{
      left: width * 0.45,
      top: height * 0.139,
      position: 'absolute'
    },
    Tienda8T:{
      width: width * 0.12,
      height: height * 0.035,
    },

    Tienda9:{
      left: width * 0.42,
      top: height * 0.176,
      position: 'absolute'
    },
    Tienda9T:{
      width: width * 0.15,
      height: height * 0.035
    },

    Tienda10:{
      left: width * 0.42,
      top: height * 0.213,
      position: 'absolute'
    },
    Tienda10T:{
      width: width * 0.22,
      height: height * 0.04
    },

    Tienda10m:{
      left: width * 0.64,
      top: height * 0.13,
      position: 'absolute'
    },
    Tienda10Tm:{
      width: width * 0.22,
      height: height * 0.2
    },

    Tienda11:{
      left: width * 0.12,
      top: height * 0.187,
      position: 'absolute'
    },
    Tienda11T:{
      width: width * 0.2,
      height: height * 0.03,
    },

    Tienda12:{
      left: width * 0.12,
      top: height * 0.219,
      position: 'absolute'
    },
    Tienda12T:{
      width: width * 0.2,
      height: height * 0.03,
    },

    Tienda13:{
      left: width * 0.12,
      top: height * 0.251,
      position: 'absolute'
    },
    Tienda13T:{
      width: width * 0.2,
      height: height * 0.02,
    },
    
    Tienda14:{
      left: width * 0.12,
      top: height * 0.273,
      position: 'absolute'
    },
    Tienda14T:{
      width: width * 0.2,
      height: height * 0.02,
    },

    Tienda15:{
      left: width * 0.12,
      top: height * 0.295,
      position: 'absolute'
    },
    Tienda15T:{
      width: width * 0.06,
      height: height * 0.061,
    },

    Tienda15m:{
      left: width * 0.175,
      top: height * 0.295,
      position: 'absolute'
    },
    Tienda15Tm:{
      width: width * 0.067,
      height: height * 0.03,
    },


    Tienda16:{
      left: width * 0.182,
      top: height * 0.326,
      position: 'absolute'
    },
    Tienda16T:{
      width: width * 0.06,
      height: height * 0.03,
    },


    TextTheme:{
        fontSize:30,
        textAlign:'center'
    },
    TextTheme1:{
        fontSize:20,
        textAlign:'center'
    },
    TextTheme2:{
        fontSize:10,
        textAlign:'center'
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })

export default Layout