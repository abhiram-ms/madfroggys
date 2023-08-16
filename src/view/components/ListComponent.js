import React from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import {subjects,courses,classes} from '../../utils/DatasforComponents';
import { useNavigation } from '@react-navigation/native';

function ListComponent() {
  const navigation = useNavigation();
  const renderItems = ({item,index})=>(
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('CourseDetails')
    }}
    style = {styles.itemViewStyle}>
      <View style = {styles.circle}></View>
      <Text style={styles.textStyle}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <FlatList
          horizontal
          data={subjects}
          keyExtractor={(item, index) => index}
          renderItem={renderItems}
          />
    </View>
  )
}

export default ListComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:8,
    },
    itemViewStyle:{
      flexDirection:'row',
      padding:4,
      margin:4,
      justifyContent:'center',
      alignContent:'center',
      borderWidth:1,
      borderRadius:8,
      borderColor:'#002333'
    },
    circle: {
      width: 24,
      height: 24,
      backgroundColor:'#00C458',
      borderRadius:12,
      alignSelf:'center',
      padding:2,
      marginLeft:4,
   },
   textStyle:{
    alignSelf:'center',
    fontSize:14,
    padding:2,
    fontWeight:'bold',
    color:'#002333',
    marginLeft:4,
   }
})