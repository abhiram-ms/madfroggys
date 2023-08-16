import React from 'react'
import { View, StyleSheet, Text, FlatList, ScrollView, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Divider() {
    return (
        <View style={{ height: 2, backgroundColor: '#F9F8F8', width: '100%' }}>
        </View>
    )
}
function Divider1() {
    return (
        <View style={{height: 2, backgroundColor: '#F9F8F8', width: '90%',alignSelf:'center' }}>
        </View>
    )
}


function Details(){
    return(
        <ScrollView>
            <View>
            <View style={styles.parentInfo}>
                <Image style={styles.ImageStyle} source={require('../assets/images/profileImage.jpg')}></Image>
                <View style={{justifyContent:'center'}}>
                    <Text style={styles.infoText}>Aron Taylor</Text>
                    <Text style={[styles.infoText,{fontWeight:'normal',color:'#4D4D4D'}]}>ID : 1234</Text>
                </View>
            </View>
            <Text style={[styles.infoText,{marginBottom:8,}]}>Personal Info</Text>
            <Divider></Divider>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                    <Text style={{flex:1, marginLeft:16,margin:4,fontWeight:'normal',color:'#4D4D4D'}}>Account Settings</Text>
                    <Text style={[styles.infoText,{flex:1,margin:4,}]}> Aron Taylor</Text>
                </View>
                <Divider1></Divider1>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                    <Text style={{flex:1, marginLeft:16,margin:4,fontWeight:'normal',color:'#4D4D4D'}}>
                        Email</Text>
                    <Text style={[styles.infoText,{flex:1,margin:4,}]}> emailid@123.com</Text>
                </View>
                <Divider1></Divider1>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                    <Text style={{flex:1, marginLeft:16,margin:4,fontWeight:'normal',color:'#4D4D4D'}}>
                        Number</Text>
                    <Text style={[styles.infoText,{flex:1,margin:4,}]}>+91 9987654356</Text>
                </View>
                <Divider1></Divider1>
            <Text style={[styles.infoText,{marginBottom:8,}]}>Course Details</Text>
            <Divider></Divider>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                    <Text style={{flex:1, marginLeft:16,margin:4,fontWeight:'normal',color:'#4D4D4D'}}>
                        Center</Text>
                    <Text style={[styles.infoText,{flex:1,margin:4,}]}>Inmakes edu</Text>
                </View>
                <Divider1></Divider1>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                    <Text style={{flex:1, marginLeft:16,margin:4,fontWeight:'normal',color:'#4D4D4D'}}>
                        Course</Text>
                    <Text style={[styles.infoText,{flex:1,margin:4,}]}>Plus Two Science</Text>
                </View>
                <Divider1></Divider1>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                    <Text style={{flex:1, marginLeft:16,margin:4,fontWeight:'normal',color:'#4D4D4D'}}>
                        Payment Status</Text>
                    <Text style={[styles.infoText,{flex:1,margin:4,}]}>Free</Text>
                </View>
                <Divider1></Divider1>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                    <Text style={{flex:1, marginLeft:16,margin:4,fontWeight:'normal',color:'#4D4D4D'}}>
                        Expiry Date</Text>
                    <Text style={[styles.infoText,{flex:1,margin:4,}]}>Not Applicable</Text>
                </View>
                <Divider1></Divider1>
            </View>
        </ScrollView>
    )
}

function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.topViewParent}>
                <View style={{ position: 'absolute',top: -40,marginRight:'70%',transform:[{scaleX:-1,}]}}>
                    <Image style={{ width: 350, height: 250, }}
                        source={require('../assets/images/decor.png')}></Image>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'flex-end'}}>
                    <Text style={{ fontSize: 24, color: 'white', margin: 16 }}>Profile</Text>
                    <Image style={{ width: 24, height: 24, margin: 16,resizeMode:'contain'}}
                        source={require('../assets/images/alerts.png')}></Image>
                    <Image style={{ width: 24, height: 24, margin: 16,resizeMode:'contain'}}
                        source={require('../assets/images/dotMenu.png')}></Image>
                </View>
            </View>
            <View style={styles.bottomViewParent}>
                <ScrollView style={styles.container2}>
                    <View style={styles.container3}>
                        <Details></Details>
                    </View>
                    <TouchableOpacity style={{width:'100%',}}>
                        <View style={{flexDirection:'row',alignItems:'center',
                        backgroundColor:'#00C458',margin:4,}}>
                            <View style={{backgroundColor:'rgba(256,256,256,0.3)',margin:4,}}>
                                <Image style={{ width: 16, height: 16, margin: 16,resizeMode:'contain'}}
                                source={require('../assets/images/payment.png')}></Image>
                            </View>
                            <Text style={{color:'white',marginLeft:8,flex:1}}>Custom Payment</Text>
                            <Image style={{ width: 12, height: 12, margin: 16,
                            resizeMode:'contain',transform:[{scaleX:-1}]}}
                                source={require('../assets/images/previousArrow.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'100%',marginBottom:20}}>
                        <View style={{flexDirection:'row',alignItems:'center',
                        backgroundColor:'#00C458',margin:4,}}>
                            <View style={{backgroundColor:'rgba(256,256,256,0.3)',margin:4}}>
                                <Image style={{ width: 16, height: 16, margin: 16,resizeMode:'contain'}}
                                source={require('../assets/images/share.png')}></Image>
                            </View>
                            <Text style={{color:'white',marginLeft:8,flex:1}}>Referals</Text>
                            <Image style={{ width: 12, height: 12, margin: 16,alignSelf:'flex-end',
                            resizeMode:'contain',transform:[{scaleX:-1}]}}
                                source={require('../assets/images/previousArrow.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    
                </ScrollView>
                
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: 'green'
    },
    container: {
        flex: 1,
        
    },
    container2: {
        position: 'absolute',
        alignSelf: 'center',
        top: -150,
        width: '90%',
        height:500
    },
    container3:{
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'#EEEEEE',
        borderRadius:8,
    },
    topViewParent: {
        backgroundColor: '#00202F',
        flex: 1,
    },
    bottomViewParent: {
        backgroundColor: '#F9F9F9',
        flex: 1.5,
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
    },
    outercircle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 2,
        padding: 2,
        justifyContent: 'center'
    },
    innercircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    textStyle: {
        color: 'green',
        margin: 4,
    },
    parentInfo:{
        marginLeft:8,
        marginTop:16,
        marginBottom:8,
        flexDirection:'row',
        padding:2,
        alignItems:'center'
    },
    ImageStyle:{
        width:60,
        height:60,
        borderRadius:30,
        resizeMode:'contain',
        borderWidth:4,
        borderColor:'#00C458'
    },
    infoText:{
        color:'#4D4D4D',
        fontWeight:'bold',
        marginLeft:16,
    },

})