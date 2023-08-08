import React, { useState } from "react"
import { View, Text, StyleSheet, Modal, Pressable, Alert, Image, Dimensions } from 'react-native'

var height = Dimensions.get("window").height
var width = Dimensions.get("window").width

const Local = (props) => {
    const { titleText, position, imageLocal, textModal, textTitleModal, tamaño } = props
    const [modalVisible, setModalVisible] = useState(false)
    

    return (
        <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>{textTitleModal}</Text>
            <Text style={styles.modalText}>{textModal}</Text>
            <Image style={styles.imageTorre} source={imageLocal} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        
        
        
        <View style={position}>
              <Pressable
                style={[styles.button1, styles.buttonOpen, tamaño ]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>{titleText}</Text>
              </Pressable>
            </View>

        </View>
    )
}


const styles = StyleSheet.create ({
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22
    },
    modalView: {
      height: height * 0.6,
      width: width * 0.8,
      backgroundColor: 'white',
      borderRadius: height * 0.02,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: height * 0.02,
      padding: width * 0.03,
      elevation: 2
    },
    button1: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonOpen: {
      backgroundColor: 'white'
    },
    buttonClose: {
      backgroundColor: 'white',
      marginTop: 15
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: width * 0.0290
    },
    modalText: {
      fontSize: width * 0.04 ,
      marginBottom: 5,
      textAlign: 'center'
    },
    modalTextTitle:{
      color: 'black',
      fontSize: width * 0.04,
      fontWeight:'600'
    },
    imageTorre:{
      height: height * 0.3,
      width: width * 0.4,
      resizeMode: 'contain'
    }



})

export default Local