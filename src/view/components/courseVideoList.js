import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {subjects,courses,classes} from '../../utils/DatasforComponents';

function CourseVideoList() {
    const renderItems = ({item,index})=>(
        <TouchableOpacity
        onPress={()=>{}}
        style = {styles.itemViewStyle}>
          <ImageBackground source={{uri:item.imgUrl}} style={styles.thumbnail}>
            <View style={{flexDirection:'row',}}>
                <Image style={styles.iconstyle} source={require('../assets/images/play.png')}></Image>
                <Text style={styles.textStyle}>{item.name}</Text>
            </View>
            <View style={{borderWidth:1,height:4,backgroundColor:'#3F57CE',marginBottom:'1%',width:'70%'}}></View>
          </ImageBackground>
        </TouchableOpacity>
      );
  return (
    <View style={styles.container}>
        <Text style={styles.textAboveStyle}>Recent Courses</Text>
        <FlatList
          horizontal
          data={courses}
          keyExtractor={(item, index) => index}
          renderItem={renderItems}
          />
    </View>
  )
}

export default CourseVideoList

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:12,
        marginLeft:8,
    },
    itemViewStyle:{
      padding:4,
      margin:4,
      justifyContent:'center',
      alignContent:'center',
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
    alignSelf:'flex-end',
    fontSize:14,
    margin:2,
    marginBottom:14,
    fontWeight:'bold',
    color:'white'
   },
   iconstyle:{
    width:20,
    height:20,
    alignSelf:'flex-end',
    margin:8,
    marginBottom:14,
   },
   textAboveStyle:{
    fontSize:14,
    marginLeft:8,
    color:'#002333'
   },
   thumbnail: {
    width: 200,
    height: 120,
    justifyContent:'flex-end',
    
  },
})