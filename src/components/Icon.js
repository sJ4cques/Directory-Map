import React from "react"
import { Image, View, StyleSheet, Dimensions } from "react-native"




var height = Dimensions.get("window").height
var width = Dimensions.get("window").width

const IconV = (props) => {
    
    const { imageIcon, Medidas } = props
    
    return (
        <View>
            <Image  
            style={[styles.Ascensor, Medidas]}
            source={imageIcon} />
        </View>
    )
}



const styles =StyleSheet.create ({


    Ascensor:{
        resizeMode: 'contain'
      }
})

export default IconV