import React,{useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    StyleSheet,} from 'react-native';
    import { useNavigation } from '@react-navigation/native';

function Button_component() {
  const navigation = useNavigation();
  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={()=>{navigation.navigate('BottomTab')}} style={styles.touchable}>
            <Image style={styles.image_style} source={require('../assets/images/arrow.png')}></Image>
        </TouchableOpacity>
    </View>
  )
}

export default Button_component

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E5E5E5',
        height:'70%',
        width:65,
        borderWidth:3,
        alignItems:'center',
        justifyContent:'center',
        borderRightColor:'#00C458',
        borderTopColor:'#00C458',
        borderLeftColor:'#E5E5E5',
        borderBottomColor:'#E5E5E5',
        
        
    },
    touchable:{
        height:'80%',
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00C458',
        elevation:4,
    },
    image_style:{
        height:16,
        width:16,
        alignSelf:'center',
    }
})

