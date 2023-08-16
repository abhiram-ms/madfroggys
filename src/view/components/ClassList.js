import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {subjects,courses,classes} from '../../utils/DatasforComponents';

function ClassList() {
    const renderItems = ({item,index})=>(
        <View style={styles.thumbnail}>
            <View style={styles.circle}></View>
            <Text style={{fontWeight:'bold',fontSize:20,padding:4,color:'#FFFFFF',height:'20%',marginLeft:8,}}>{item.heading}</Text>
            <Text style={{fontWeight:'100',fontSize:16,padding:4,color:'#446270',height:'30%',marginLeft:8,}}>{item.description}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
        </View>
      );
  return (
    <View style={styles.container}>
        <FlatList
          horizontal
          data={classes}
          keyExtractor={(item, index) => index}
          renderItem={renderItems}
          />
    </View>
  )
}

export default ClassList

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
      width: 60,
      height: 60,
      backgroundColor:'#002E43',
      borderRadius:30,
      alignSelf:'flex-start',
      margin:16,
   },
   textStyle:{
    alignSelf:'flex-start',
    fontSize:14,
    margin:2,
    marginBottom:14,
    fontWeight:'bold',
    color:'white'
   },
   thumbnail: {
    flex:1,
    width: 220,
    height: 350,
    backgroundColor:'#002333',
    margin:4,
    borderRadius:8,
  },
  button:{
    backgroundColor:'#00C458',
    width:'60%',
    height:'15%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    margin:4,
    marginTop:14,
    borderRadius:8,
  },
  buttonText:{
    alignSelf:'center',
    color:'white',
  },
})