import React, { Component } from "react";
import { Image, StyleSheet, View,Text} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default class Register extends Component{
    render(){
        return (
            <View style = {styles.background_view}>
                <View style = {styles.upper_view}>
                    <View style={styles.image_container}>
                        <Image style={styles.image_style} source={require('../assets/images/logo.png')}></Image>
                    </View>
                    <View style={styles.text_container}>
                        <Text style={styles.text_style}>Enter Your Mobile Number</Text>
                        <Text style={styles.second_text}>We will send you an OTP to verify</Text>
                    </View>
                </View>
                <View style = {styles.foreground_view}>
                    <View style={styles.view_inside_foreground}>
                        <View style={{flex:1,flexDirection:'row',width:'100%'}}>
                            <Text style={styles.contry_code}>+91</Text>
                            <TextInput keyboardType={'number-pad'} style={styles.enter_phone_num}>Enter your phone</TextInput>
                        </View>
                    </View>
                    <View style={[styles.view_inside_foreground,{marginTop:4,backgroundColor:'#00C458',
                    justifyContent:'center',alignItems:'center'}]}>
                        <TouchableOpacity style={styles.continue_button}
                        onPress={()=>this.props.navigation.navigate('Otp')}>
                            <Text style={{color:'white'}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background_view: {
        backgroundColor : "white",
        height: '100%',
        width : '100%',
    },
    foreground_view:{
        height:'35%',
        backgroundColor :'#002333',
        width :'100%',
        borderTopRightRadius:16,
        borderTopLeftRadius:16,
    },
    upper_view:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column',
        width:'100%',
    },
    image_container:{
        flex:4,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    image_style:{
        height:'40%',
        width:'70%' 
    },
    text_container:{
        flex:1,
        alignItems:'center'
    },
    text_style:{
        color:'#002333',
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'Gilroy-ExtraBold',
    },
    second_text:{
       color:'#9F9F9F',
       fontFamily:'Gilroy-ExtraBold',
    },
    view_inside_foreground:{
        flex:1,
        flexDirection:'row',
        margin:24,
        marginBottom:12,
        borderRadius:4,
    },
    contry_code:{
        flex:1,
        backgroundColor:'#062E40',
        borderRadius:4,
        textAlign:'center',
        textAlignVertical:'center',
        color:'white',
    },
    enter_phone_num:{
        flex:3,
        backgroundColor:'#062E40',
        justifyContent:'center',
        alignItems:'center',
        color:'#446270',
        borderRadius:4,
        marginLeft:'2%',
    },
    continue_button:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    }

})