import React from 'react'
import { StyleSheet,View,Image,TouchableOpacity,Text} from 'react-native'

function TopBar() {
  return (
    <View style={styles.container}>
        <View style={styles.icon}>
            <TouchableOpacity onPress={()=>{
                
            }}>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.smallDotInside}></View>
                    <View style={styles.smallDotInside}></View>
                    <View></View>
                </View>
            </TouchableOpacity>
            <View style={{flexDirection:'row',}}>
                <View style={styles.smallDotInside}></View>
                <View style={styles.smallDotInside}></View>
                <View></View>
            </View>
        </View>
        <Image style={styles.image_style} source={require('../assets/images/logo.png')}></Image>
        <TouchableOpacity
            onPress={()=>{}}
            style = {styles.itemViewStyle}>
            <View style = {styles.circle}></View>
            <Text style={styles.textStyle}>Classes</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:16,
        marginLeft:8,
        marginTop:8,
        alignItems:'center'
    },
    image_style:{
        height:60,
        width:150,
    },
    icon:{
        width:40,
        height:40,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#D5D5D5',
        alignItems:'center',
        justifyContent:'center',
    },
    smallDotInside:{
        backgroundColor:'#00C458',
        height:8,
        width:8,
        margin:2,
    },
    textStyle:{
        alignSelf:'center',
        fontSize:14,
        padding:2,
        fontWeight:'bold',
        color:'#00C458',
        marginLeft:4,
    },
    circle: {
        width: 16,
        height: 16,
        backgroundColor:'#007345',
        borderRadius:12,
        alignSelf:'center',
        padding:2,
        marginLeft:4,
     },
    itemViewStyle:{
     flexDirection:'row',
     padding:4,
     justifyContent:'center',
     alignContent:'center',
     borderWidth:1,
     borderRadius:4,
     borderColor:'#00C458',
     height:35,
     marginLeft:40,
    },
})