import React, { Component } from "react";
import { Image, StyleSheet, View,Text,ImageBackground} from "react-native";
import { TextInput, TouchableHighlight ,TouchableOpacity} from "react-native-gesture-handler";
import Dropdown from "../components/dropdown";

export default class SelectSchool extends Component{
    render(){
        return (
            <View style = {styles.background_view}>
                <View style = {styles.upper_view}>
                    <View style={styles.image_container}>
                        <Image style={styles.image_style} source={require('../assets/images/logo.png')}></Image>
                    </View>
                    <View style={[{flex:2,alignItems:'center',}]}>
                        <ImageBackground style={styles.image_icon_background} source={require('../assets/images/iconImage.png')}>
                            <View style={styles.icon_text_view}>
                                <Text>Icon</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.text_container}>
                        <Text style={styles.text_style}>Select Your School Board</Text>
                    </View>
                </View>
                <View style = {styles.foreground_view}>
                    <View style={styles.view_inside_foreground}>
                        <View style={{flex:1,width:'100%',zIndex:90}}>
                            <Dropdown defaultText = 'Select Board' containerColor = 'green'></Dropdown>
                            <Dropdown defaultText = 'Select Class'></Dropdown>
                        </View>
                    </View>
                    <View style={[styles.view_inside_foreground,{flex:1,marginTop:4,backgroundColor:'#00C458',
                    justifyContent:'center',alignItems:'center'}]}>
                        <TouchableOpacity onPress={()=>{
                           this.props.navigation.navigate('AppTour')
                        }}><Text style={{color:'white'}}>Continue</Text>
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
        height:'40%',
        backgroundColor :'#002333',
        width :'100%',
        borderTopRightRadius:16,
        borderTopLeftRadius:16,
    },
    upper_view:{
        flex:1,
        flexDirection:'column',
        width:'100%',
    },
    image_container:{
        flex:2,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    image_style:{
        height:'40%',
        width:'70%' ,
    },
    text_container:{
        flex:1,
        alignItems:'center'
    },
    text_style:{
        color:'#002333',
        fontWeight:'bold',
        fontSize:20,
    },
    second_text:{
       color:'#9F9F9F',
    },
    view_inside_foreground:{
        flex:2,
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
        flex:1,
        backgroundColor:'#062E40',
        justifyContent:'center',
        alignItems:'center',
        color:'#446270',
        margin:2,
        borderRadius:4,
        zIndex:90

    },
    otp_container:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    resend_view:{
        flex:0.5,
        alignSelf:'center',
    },
    call_us_view:{
        flex:1.5,
        marginTop:'5%',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
    },
    image_icon_background:{
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F9F9F9',
        borderRadius:50,
    },
    icon_text_view:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'center',

    }

})