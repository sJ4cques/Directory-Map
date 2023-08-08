import React from "react"
import { ViewStyle, View } from "react-native"

const Seperator = (props) => {
    
    const { medidasLinea } = props

    return (


        <View style={[seperatorStyles,medidasLinea]} />
    )
}



const seperatorStyles: ViewStyle = {
    
    backgroundColor: 'black'
}

export default Seperator