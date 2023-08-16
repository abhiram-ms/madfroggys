import React, { Component } from "react";
import { Image, StyleSheet, View,Text,ImageBackground,TouchableOpacity} from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";


export default class Otp extends Component{
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
                        <Text style={styles.text_style}>Verification code</Text>
                        <Text style={styles.second_text}>Please type the verification coode send to</Text>
                        <Text style={{marginTop:'10%',fontWeight:'bold',color:'black'}}>+91 9946643709</Text>
                    </View>
                </View>
                <View style = {styles.foreground_view}>
                    <View style={styles.view_inside_foreground}>
                        <View style={styles.otp_container}>
                            <TextInput keyboardType={'numeric'} style={styles.enter_otp}></TextInput>
                            <TextInput keyboardType={'numeric'} style={styles.enter_otp}></TextInput>
                            <TextInput keyboardType={'numeric'} style={styles.enter_otp}></TextInput>
                            <TextInput keyboardType={'numeric'} style={styles.enter_otp}></TextInput>
                            <TextInput keyboardType={'numeric'} style={styles.enter_otp}></TextInput>
                            <TextInput keyboardType={'numeric'} style={styles.enter_otp}></TextInput>
                        </View>
                    </View>
                    <View style={[styles.view_inside_foreground,{marginTop:4,backgroundColor:'#00C458',
                    justifyContent:'center',alignItems:'center'}]}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('StudentDetails')}>
                            <Text style={{color:'white',}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.resend_view}>
                        <Text style={{color:'#446270',fontWeight:'bold',fontSize:12}}>Resend after 28 s</Text>
                    </View>
                    <View style = {styles.call_us_view}>
                        <Image style={{}}
                         source={require('../assets/images/call_image.png')}></Image>
                        <Text style={{color:'#00C458',fontWeight:'bold'}}> Contact us</Text>
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
        flex:2,
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
    enter_otp:{
        backgroundColor:'#062E40',
        justifyContent:'center',
        alignItems:'center',
        color:'#446270',
        marginLeft:8,
        borderRadius:4,
        width:'15%',

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