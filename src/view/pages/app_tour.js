import React,{useRef,useState} from 'react'
import {StyleSheet,View,Text,FlatList,Image,TouchableOpacity,Animated} from 'react-native';
import Button_component from '../components/button_component';

const sliderImages = [
  require('../assets/images/slider1.png'),
  require('../assets/images/slider2.png'),
  require('../assets/images/slider3.png'),
]

function AppTour() {
  const srollx = useRef(new Animated.Value(0)).current;
  const [currentIndex,setCurrentIndex]= useState(0)
  const viewableItemsChanged= useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index)
  }).current;
  return (
    <View style={styles.container}>
      <View style={styles.child_Container1}>
        <FlatList 
        bounces={false}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sliderImages}
        keyExtractor={(item,index) =>index}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        renderItem={({item,index})=>{
          return(
            <Image style={{flex:0.3,resizeMode:'stretch',
            width:350,height:'100%',}} source={item}></Image>
          );
        }}
        ></FlatList>
      </View>
      <View style={styles.child_Container2}>
        <Text style={styles.text_style}>App tour title</Text>
        <Text style={styles.second_text}>The app tour description goes here</Text>
      </View>
      <View style={styles.child_Container3}>
        <Button_component></Button_component>
      </View>
    </View>
  )
}

export default AppTour

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,  
        padding:8,  
    },
    child_Container1:{
      flex:4,
      backgroundColor:'#F3F3F3',
      borderRadius:12,
      alignItems:'center',
      justifyContent:'center',
    },
    child_Container2:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    child_Container3:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    text_style:{
      color:'#002333',
      fontWeight:'bold',
      fontSize:16,
    },
    second_text:{
     color:'#9F9F9F',
     fontSize:14
    },
})