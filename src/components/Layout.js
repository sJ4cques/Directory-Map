import { StyleSheet, View, Dimensions, StatusBar, ScrollView, Text } from 'react-native'
import React from 'react'
import Local from './Local'
import IconV from './Icon'


var height = Dimensions.get("window").height
var width = Dimensions.get("window").width

const Layout = () => {
  
  return (
    <View>
      <StatusBar backgroundColor='skyblue' />

    <ScrollView horizontal={true}    style={styles.roll} >

        <View style={styles.vecino}>
          
        </View>

        <View style={styles.container}>

          
          
            <Local 
              titleText={'T 1'}
              position={styles.Tienda1}
              tamaño={styles.Tienda1T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 1.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 2'}
              position={styles.Tienda2}
              tamaño={styles.Tienda2T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 2.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 3'}
              position={styles.Tienda3}
              tamaño={styles.Tienda3T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 3.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 4'}
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

            <Local 
              titleText={'T 17'}
              position={styles.Tienda17}
              tamaño={styles.Tienda17T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 17.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 18'}
              position={styles.Tienda18}
              tamaño={styles.Tienda18T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 18.'}
              textTitleModal={'HUNGRY DRAGON'}
            /> 

            <Local 
              titleText={'T 19'}
              position={styles.Tienda19}
              tamaño={styles.Tienda19T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 19.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 20'}
              position={styles.Tienda20}
              tamaño={styles.Tienda20T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 20.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda21m}
              tamaño={styles.Tienda21Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 21.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 21'}
              position={styles.Tienda21}
              tamaño={styles.Tienda21T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 21.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda21m2}
              tamaño={styles.Tienda21Tm2}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 21.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 22'}
              position={styles.Tienda22}
              tamaño={styles.Tienda22T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 22.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda23m}
              tamaño={styles.Tienda23Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 23.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 23'}
              position={styles.Tienda23}
              tamaño={styles.Tienda23T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 23.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda23m2}
              tamaño={styles.Tienda23Tm2}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 23.'}
              textTitleModal={'HUNGRY DRAGON'}
            /> 

            <Local 
              titleText={'T 24'}
              position={styles.Tienda24}
              tamaño={styles.Tienda24T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 24.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda25m}
              tamaño={styles.Tienda25Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 25.'}
              textTitleModal={'HUNGRY DRAGON'}
            />   

            <Local 
              titleText={'T 25'}
              position={styles.Tienda25}
              tamaño={styles.Tienda25T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 25.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda25m2}
              tamaño={styles.Tienda25Tm2}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 25.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 26'}
              position={styles.Tienda26}
              tamaño={styles.Tienda26T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 26.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda26m}
              tamaño={styles.Tienda26Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 26.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 27'}
              position={styles.Tienda27}
              tamaño={styles.Tienda27T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 27.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 28'}
              position={styles.Tienda28}
              tamaño={styles.Tienda28T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 28.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 29'}
              position={styles.Tienda29}
              tamaño={styles.Tienda29T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 29.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 30'}
              position={styles.Tienda30}
              tamaño={styles.Tienda30T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 30.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 31'}
              position={styles.Tienda31}
              tamaño={styles.Tienda31T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 31.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 32'}
              position={styles.Tienda32}
              tamaño={styles.Tienda32T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 32.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 33'}
              position={styles.Tienda33}
              tamaño={styles.Tienda33T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 33.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 34'}
              position={styles.Tienda34}
              tamaño={styles.Tienda34T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 34.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 35'}
              position={styles.Tienda35}
              tamaño={styles.Tienda35T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 35.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 36'}
              position={styles.Tienda36}
              tamaño={styles.Tienda36T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 36.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 37'}
              position={styles.Tienda37}
              tamaño={styles.Tienda37T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 37.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 38'}
              position={styles.Tienda38}
              tamaño={styles.Tienda38T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 38.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 39'}
              position={styles.Tienda39}
              tamaño={styles.Tienda39T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 39.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 40'}
              position={styles.Tienda40}
              tamaño={styles.Tienda40T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 40.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda41}
              tamaño={styles.Tienda41T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 41.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 41'}
              position={styles.Tienda41m}
              tamaño={styles.Tienda41Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 41.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 42'}
              position={styles.Tienda42}
              tamaño={styles.Tienda42T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 42.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda43}
              tamaño={styles.Tienda43T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 43.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 43'}
              position={styles.Tienda43m}
              tamaño={styles.Tienda43Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 43.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 44'}
              position={styles.Tienda44}
              tamaño={styles.Tienda44T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 44.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 45'}
              position={styles.Tienda45}
              tamaño={styles.Tienda45T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 45.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 46'}
              position={styles.Tienda46}
              tamaño={styles.Tienda46T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 46.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 47'}
              position={styles.Tienda47}
              tamaño={styles.Tienda47T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 47.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 48'}
              position={styles.Tienda48}
              tamaño={styles.Tienda48T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 48.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 49'}
              position={styles.Tienda49}
              tamaño={styles.Tienda49T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 49.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={''}
              position={styles.Tienda50}
              tamaño={styles.Tienda50T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 50.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 50'}
              position={styles.Tienda50m}
              tamaño={styles.Tienda50Tm}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 50.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 51'}
              position={styles.Tienda51}
              tamaño={styles.Tienda51T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 51.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 52'}
              position={styles.Tienda52}
              tamaño={styles.Tienda52T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 52.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 53'}
              position={styles.Tienda53}
              tamaño={styles.Tienda53T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 53.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 54'}
              position={styles.Tienda54}
              tamaño={styles.Tienda54T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 54.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 55'}
              position={styles.Tienda55}
              tamaño={styles.Tienda55T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 55.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 56'}
              position={styles.Tienda56}
              tamaño={styles.Tienda56T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 56.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 57'}
              position={styles.Tienda57}
              tamaño={styles.Tienda57T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 57.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 58'}
              position={styles.Tienda58}
              tamaño={styles.Tienda58T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 58.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 59'}
              position={styles.Tienda59}
              tamaño={styles.Tienda59T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 59.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

            <Local 
              titleText={'T 60'}
              position={styles.Tienda60}
              tamaño={styles.Tienda60T}
              imageLocal={require('../../assets/hungry.png')}
              textModal={'Esto es Tienda 60.'}
              textTitleModal={'HUNGRY DRAGON'}
            />

        
        </View>

        

        </ScrollView>
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

    roll:{
      
    },

    vecino:{
      backgroundColor: 'grey',
      height: height * 0.9,
      width: width *0.3,
      marginTop: StatusBar.currentHeight || 0
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


    Tienda17:{
      left: width * 0.245,
      top: height * 0.295,
      position: 'absolute'
    },
    Tienda17T:{
      width: width * 0.075,
      height: height * 0.019,
    },

    Tienda18:{
      left: width * 0.245,
      top: height * 0.316,
      position: 'absolute'
    },
    Tienda18T:{
      width: width * 0.075,
      height: height * 0.019,
    },

    Tienda19:{
      left: width * 0.245,
      top: height * 0.337,
      position: 'absolute'
    },
    Tienda19T:{
      width: width * 0.075,
      height: height * 0.019,
    },

    Tienda20:{
      left: width * 0.42,
      top: height * 0.255,
      position: 'absolute'
    },
    Tienda20T:{
      width: width * 0.218,
      height: height * 0.03
    },

    Tienda21m:{
      left: width * 0.42,
      top: height * 0.287,
      position: 'absolute'
    },
    Tienda21Tm:{
      width: width * 0.218,
      height: height * 0.015
    },

    Tienda21:{
      left: width * 0.443,
      top: height * 0.302,
      position: 'absolute'
    },
    Tienda21T:{
      width: width * 0.195,
      height: height * 0.017
    },

    Tienda21m2:{
      left: width * 0.463,
      top: height * 0.319,
      position: 'absolute'
    },
    Tienda21Tm2:{
      width: width * 0.175,
      height: height * 0.011
    },

    Tienda22:{
      left: width * 0.475,
      top: height * 0.332,
      position: 'absolute'
    },
    Tienda22T:{
      width: width * 0.150,
      height: height * 0.017
    },

    Tienda23m:{
      left: width * 0.49,
      top: height * 0.351,
      position: 'absolute'
    },
    Tienda23Tm:{
      width: width * 0.19,
      height: height * 0.015
    },

    Tienda23:{
      left: width * 0.51,
      top: height * 0.365,
      position: 'absolute'
    },
    Tienda23T:{
      width: width * 0.17,
      height: height * 0.015
    },

    Tienda23m2:{
      left: width * 0.53,
      top: height * 0.38,
      position: 'absolute'
    },
    Tienda23Tm2:{
      width: width * 0.15,
      height: height * 0.015
    },

    Tienda24:{
      left: width * 0.5,
      top: height * 0.398,
      position: 'absolute'
    },
    Tienda24T:{
      width: width * 0.18,
      height: height * 0.017
    },

    Tienda25m:{
      left: width * 0.46,
      top: height * 0.418,
      position: 'absolute'
    },
    Tienda25Tm:{
      width: width * 0.22,
      height: height * 0.017
    },

    Tienda25:{
      left: width * 0.44,
      top: height * 0.435,
      position: 'absolute'
    },
    Tienda25T:{
      width: width * 0.24,
      height: height * 0.017
    },

    Tienda25m2:{
      left: width * 0.42,
      top: height * 0.45,
      position: 'absolute'
    },
    Tienda25Tm2:{
      width: width * 0.26,
      height: height * 0.017
    },

    Tienda26:{
      left: width * 0.05,
      top: height * 0.37,
      position: 'absolute'
    },
    Tienda26T:{
      width: width * 0.15,
      height: height * 0.017,
    },

    Tienda26m:{
      left: width * 0.05,
      top: height * 0.387,
      position: 'absolute'
    },
    Tienda26Tm:{
      width: width * 0.12,
      height: height * 0.017,
    },

    Tienda27:{
      left: width * 0.05,
      top: height * 0.406,
      position: 'absolute'
    },
    Tienda27T:{
      width: width * 0.1,
      height: height * 0.09,
    },

    Tienda28:{
      left: width * 0.205,
      top: height * 0.37,
      position: 'absolute'
    },
    Tienda28T:{
      width: width * 0.115,
      height: height * 0.017,
    },

    Tienda29:{
      left: width * 0.175,
      top: height * 0.39,
      position: 'absolute'
    },
    Tienda29T:{
      width: width * 0.145,
      height: height * 0.014,
    },

    Tienda29:{
      left: width * 0.175,
      top: height * 0.39,
      position: 'absolute'
    },
    Tienda29T:{
      width: width * 0.145,
      height: height * 0.014,
    },

    Tienda30:{
      left: width * 0.155,
      top: height * 0.406,
      position: 'absolute'
    },
    Tienda30T:{
      width: width * 0.165,
      height: height * 0.017,
    },

    Tienda31:{
      left: width * 0.155,
      top: height * 0.453,
      position: 'absolute'
    },
    Tienda31T:{
      width: width * 0.165,
      height: height * 0.017,
    },

    Tienda32:{
      left: width * 0.155,
      top: height * 0.425,
      position: 'absolute'
    },
    Tienda32T:{
      width: width * 0.165,
      height: height * 0.025,
    },

    Tienda33:{
      left: width * 0.155,
      top: height * 0.473,
      position: 'absolute'
    },
    Tienda33T:{
      width: width * 0.08,
      height: height * 0.023,
    },

    Tienda34:{
      left: width * 0.24,
      top: height * 0.473,
      position: 'absolute'
    },
    Tienda34T:{
      width: width * 0.08,
      height: height * 0.023,
    },

    Tienda35:{
      left: width * 0.05,
      top: height * 0.51,
      position: 'absolute'
    },
    Tienda35T:{
      width: width * 0.08,
      height: height * 0.06,
    },

    Tienda36:{
      left: width * 0.135,
      top: height * 0.51,
      position: 'absolute'
    },
    Tienda36T:{
      width: width * 0.06,
      height: height * 0.06,
    },

    Tienda37:{
      left: width * 0.2,
      top: height * 0.51,
      position: 'absolute'
    },
    Tienda37T:{
      width: width * 0.05,
      height: height * 0.06,
    },

    Tienda38:{
      left: width * 0.255,
      top: height * 0.51,
      position: 'absolute'
    },
    Tienda38T:{
      width: width * 0.065,
      height: height * 0.03,
    },

    Tienda39:{
      left: width * 0.255,
      top: height * 0.542,
      position: 'absolute'
    },
    Tienda39T:{
      width: width * 0.065,
      height: height * 0.028,
    },

    Tienda40:{
      left: width * 0.255,
      top: height * 0.572,
      position: 'absolute'
    },
    Tienda40T:{
      width: width * 0.065,
      height: height * 0.028,
    },

    Tienda41:{
      left: width * 0.05,
      top: height * 0.572,
      position: 'absolute'
    },
    Tienda41T:{
      width: width * 0.199,
      height: height * 0.03,
    },

    Tienda41m:{
      left: width * 0.05,
      top: height * 0.602,
      position: 'absolute'
    },
    Tienda41Tm:{
      width: width * 0.27,
      height: height * 0.028,
    },

    Tienda42:{
      left: width * 0.05,
      top: height * 0.633,
      position: 'absolute'
    },
    Tienda42T:{
      width: width * 0.27,
      height: height * 0.028,
    },

    Tienda43:{
      left: width * 0.05,
      top: height * 0.664,
      position: 'absolute'
    },
    Tienda43T:{
      width: width * 0.07,
      height: height * 0.08,
    },

    Tienda43m:{
      left: width * 0.12,
      top: height * 0.664,
      position: 'absolute'
    },
    Tienda43Tm:{
      width: width * 0.07,
      height: height * 0.06,
    },

    Tienda44:{
      left: width * 0.195,
      top: height * 0.664,
      position: 'absolute'
    },
    Tienda44T:{
      width: width * 0.125,
      height: height * 0.03,
    },

    Tienda45:{
      left: width * 0.195,
      top: height * 0.697,
      position: 'absolute'
    },
    Tienda45T:{
      width: width * 0.125,
      height: height * 0.027,
    },

    Tienda46:{
      left: width * 0.4,
      top: height * 0.49,
      position: 'absolute'
    },
    Tienda46T:{
      width: width * 0.4,
      height: height * 0.18
    },

    Tienda47:{
      left: width * 0.6,
      top: height * 0.674,
      position: 'absolute'
    },
    Tienda47T:{
      width: width * 0.2,
      height: height * 0.025
    },

    Tienda48:{
      left: width * 0.6,
      top: height * 0.702,
      position: 'absolute'
    },
    Tienda48T:{
      width: width * 0.2,
      height: height * 0.025
    },

    Tienda49:{
      left: width * 0.6,
      top: height * 0.73,
      position: 'absolute'
    },
    Tienda49T:{
      width: width * 0.2,
      height: height * 0.025
    },

    Tienda50:{
      left: width * 0.6,
      top: height * 0.758,
      position: 'absolute'
    },
    Tienda50T:{
      width: width * 0.2,
      height: height * 0.015
    },

    Tienda50m:{
      left: width * 0.6,
      top: height * 0.77,
      position: 'absolute'
    },
    Tienda50Tm:{
      width: width * 0.12,
      height: height * 0.02
    },

    Tienda51:{
      left: width * 0.6,
      top: height * 0.793,
      position: 'absolute'
    },
    Tienda51T:{
      width: width * 0.12,
      height: height * 0.02
    },

    Tienda52:{
      left: width * 0.49,
      top: height * 0.77,
      position: 'absolute'
    },
    Tienda52T:{
      width: width * 0.06,
      height: height * 0.115
    },

    Tienda53:{
      left: width * 0.425,
      top: height * 0.77,
      position: 'absolute'
    },
    Tienda53T:{
      width: width * 0.06,
      height: height * 0.115
    },

    Tienda54:{
      left: width * 0.36,
      top: height * 0.77,
      position: 'absolute'
    },
    Tienda54T:{
      width: width * 0.06,
      height: height * 0.115
    },

    Tienda55:{
      left: width * 0.295,
      top: height * 0.77,
      position: 'absolute'
    },
    Tienda55T:{
      width: width * 0.06,
      height: height * 0.115
    },

    Tienda56:{
      left: width * 0.23,
      top: height * 0.77,
      position: 'absolute'
    },
    Tienda56T:{
      width: width * 0.06,
      height: height * 0.07
    },

    Tienda57:{
      left: width * 0.165,
      top: height * 0.77,
      position: 'absolute'
    },
    Tienda57T:{
      width: width * 0.06,
      height: height * 0.04
    },

    Tienda58:{
      left: width * 0.165,
      top: height * 0.812,
      position: 'absolute'
    },
    Tienda58T:{
      width: width * 0.06,
      height: height * 0.028
    },

    Tienda59:{
      left: width * 0.165,
      top: height * 0.843,
      position: 'absolute'
    },
    Tienda59T:{
      width: width * 0.125,
      height: height * 0.042
    },

    Tienda60:{
      left: width * -0.27,
      top: height * 0.685,
      position: 'absolute'
    },
    Tienda60T:{
      width: width * 0.3,
      height: height * 0.2
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