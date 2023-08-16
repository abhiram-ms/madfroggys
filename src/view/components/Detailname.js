import React from 'react'
import { View,StyleSheet } from 'react-native'

function Detailname(title,color) {
  return (
    <View style = {styles.container}>
        <View style={[styles.outercircle,{borderColor:{color}}]}>
            <View style={[styles.innercircle,{backgroundColor:{color}}]}></View>
        </View>
        <Text style={[styles.textStyle,{color:{color}}]}>{title}</Text>
    </View>
  )
}

export default Detailname

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',

    },
    outercircle:{
        height:24,
        width:24,
        borderRadius:24,
        borderWidth:2,
    },
    innercircle:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:'green'
    },
    textStyle:{

    }
})