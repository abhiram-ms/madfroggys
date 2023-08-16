import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image,ScrollView,TouchableOpacity} from 'react-native';
import { CourseDetailsData } from '../../utils/DatasforComponents';
import { TextInput } from 'react-native-gesture-handler';

function Divider() {
    return (
        <View style={{ height: 2, backgroundColor: '#173442', width: '100%' }}>
        </View>
    )
}

function Previous() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 16, height: 16, resizeMode: 'contain', marginRight:8,}}
                source={require('../assets/images/previousArrow.png')}></Image>
            <Text style={{ fontSize: 12, color: '#9F9F9F' }}>Previous</Text>
        </View>
    )
}
function NextArrow() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 12, color: 'white',marginRight:8,}}>Next</Text>
            <Image style={{ width: 16, height: 16, resizeMode: 'contain',transform:[{ scaleX: -1}]}}
                source={require('../assets/images/previousArrow.png')}></Image>
        </View>
    )
}

function CircleDot() {
    return (
        <View style={styles.container1}>
            <View style={[styles.outercircle, { borderColor: '#00C458' }]}>
                <View style={[styles.innercircle, { backgroundColor: '#00C458' }]}></View>
            </View>
            <Text style={[styles.textStyle, { color: '#00C458' }]}>Part 1</Text>
        </View>
    )
}

function WhatsappButton(){
    return(
        <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#00C458',
        width:'90%',padding:8,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
            <Image style={{ width: 24, height: 24, margin: 4, resizeMode: 'contain',}}
                source={require('../assets/images/whatsapp.png')}></Image>
            <Text style={{color:'#00C458',alignSelf:'center'}}>Enquire now</Text>
        </TouchableOpacity>
    )
}

function AskQuestion(){
    return(
        <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',
        alignItems:'center',alignSelf:'center',backgroundColor:'#062E40',margin:8,borderWidth:2,borderColor:'#13394A'}}>
            <TextInput style={{color:'#446270',marginLeft:16}}>Ask a question</TextInput>
            <TouchableOpacity style={{backgroundColor:'white',borderRadius:4,margin:8}}>
                <Text style={{margin:8,color:'black'}}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}
function Question(){
    return(
        <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',
        alignItems:'center',alignSelf:'center',backgroundColor:'#000000',margin:8,padding:12}}>
            <Text style={{color:'white',marginLeft:16,width:'70%'}}>Your sample question can be shown here no matter how long</Text>
            <Image style={{width:30,height:30,borderRadius:15}} 
            source={require('../assets/images/profileImage.jpg')}></Image>
        </View>
    )
}

function VideoPage() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1.5, }}>
                <ImageBackground style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}
                    source={{ uri: CourseDetailsData[0].image }}>
                    <Image source={require('../assets/images/play.png')}></Image>
                </ImageBackground>
            </View>
            <View style={{ flex: 3, backgroundColor: '#00202F' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', margin: 16, fontSize: 18, width: '70%' }}>
                        Long chapter name can be shown here</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 24, height: 24, margin: 16, resizeMode: 'contain', marginBottom: 2 }}
                            source={require('../assets/images/download.png')}></Image>
                        <Text style={{ color: 'white', fontSize: 12, }}>Download</Text>
                    </View>
                </View>
                <Divider></Divider>
                <View style={{ flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center', margin: 16, }}>
                    <Previous></Previous>
                    <CircleDot></CircleDot>
                    <NextArrow></NextArrow>
                </View>
                <Divider></Divider>
                    <View style={{position:'absolute',bottom:0,alignSelf:'center',width:'100%'}}>
                        <Question></Question>
                        <AskQuestion></AskQuestion>
                        <WhatsappButton></WhatsappButton>
                    </View>
            </View>
        </View>
    )
}

export default VideoPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginRight:16,
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
    }
})