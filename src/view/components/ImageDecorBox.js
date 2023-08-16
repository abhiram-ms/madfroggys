import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,ImageBackground} from 'react-native';

function ImageDecorBox() {
  return (
    <TouchableOpacity
        onPress={()=>{}}
        style = {styles.itemViewStyle}>
          <ImageBackground source={require('../assets/images/decorbox.png')} style={styles.thumbnail}>
            <View style={{marginLeft:16,flex:1,justifyContent:'space-around'}}>
                <Text style={styles.textStyle}>Class</Text>
                <Text style={styles.textStyle}>PlusTwo Science</Text>
            </View>
            <Image style={styles.iconStyle} source={require('../assets/images/dropdown_white.png')}></Image>
          </ImageBackground>
    </TouchableOpacity>
  )
}

export default ImageDecorBox


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemViewStyle:{
      padding:4,
      margin:4,
      justifyContent:'center',
      alignContent:'center',
      marginTop:12,
      marginLeft:8,
      marginBottom:16,
    },
    circle: {
      width: 24,
      height: 24,
      backgroundColor:'#00C458',
      borderRadius:12,
      alignSelf:'center',
      padding:2,
   },
   textStyle:{
    fontSize:14,
    margin:2,
    color:'white'
   },
   textStyle1:{
    fontSize:14,
    margin:2,
    marginBottom:14,
    fontWeight:'bold',
    color:'white'
   },
   thumbnail: {
    width: 311,
    height: 64,
    flexDirection:'row',
    alignItems:'center',
  },
  iconStyle:{
    marginRight:24,
    alignSelf:'center',
    width:'10%',
    height:8,
    width:12,
  },
})