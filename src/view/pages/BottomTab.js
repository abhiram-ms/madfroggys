import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

//for navigation
import Recent from './Recent';
import Profile from './Profile';
import Exams from './Exams';
import Contacts from './Contacts';
import Home from './Home';

const Tab = createBottomTabNavigator();

function BottomTab(){
  return(
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
            position:'absolute',
            bottom:25,
            left:10,
            right:10,
            flexDirection: 'row',
            width: '96%',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
            borderRadius: 4,
            
        }
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            if(focused){
                return(
                    <View>
                        <Image style={styles.icons} source={require('../assets/images/home.png')}></Image>
                        <Image style={styles.dot} source={require('../assets/images/dot.png')}></Image>
                    </View>
                )
            }else{
                return(
                    <View>
                        <Image style={styles.icons} source={require('../assets/images/home_white.png')}></Image>
                        <Text style={styles.iconTextStyle}>Home</Text>
                    </View>
                )
            }
        }
    }} 
      />
      <Tab.Screen name="Recent" component={Recent} options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            if(focused){
                return(
                    <View>
                        <Image style={styles.icons} source={require('../assets/images/polygon.png')}></Image>
                        <Image style={styles.dot} source={require('../assets/images/dot.png')}></Image>
                    </View>
                )
            }else{
                return(
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Image style={styles.icons} source={require('../assets/images/polygon.png')}></Image>
                        <Text style={styles.iconTextStyle}>Recent</Text>
                    </View>
                )
            }
        }

    }} />
      <Tab.Screen name="Exams" component={Exams} options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            if(focused){
                return(
                    <View>
                        <Image style={styles.icons} source={require('../assets/images/exams.png')}></Image>
                        <Image style={styles.dot} source={require('../assets/images/dot.png')}></Image>
                    </View>
                )
            }else{
                return(
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Image style={styles.icons} source={require('../assets/images/exams.png')}></Image>
                        <Text style={styles.iconTextStyle}>Exams</Text>
                    </View>
                )
            }
        }
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            if(focused){
                return(
                    <View>
                        <Image style={styles.icons} source={require('../assets/images/profile_green.png')}></Image>
                        <Image style={styles.dot} source={require('../assets/images/dot.png')}></Image>
                    </View>
                )
            }else{
                return(
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Image style={styles.icons} source={require('../assets/images/profile.png')}></Image>
                        <Text style={styles.iconTextStyle}>Profile</Text>
                    </View>
                )
            }
        }
        }} />
      <Tab.Screen name="Contacts" component={Contacts} options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            if(focused){
                return(
                    <View>
                        <Image style={styles.icons} source={require('../assets/images/contact.png')}></Image>
                        <Image style={styles.dot} source={require('../assets/images/dot.png')}></Image>
                    </View>
                )
            }else{
                return(
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Image style={styles.icons} source={require('../assets/images/contact.png')}></Image>
                        <Text style={styles.iconTextStyle}>Contact</Text>
                    </View>
                )
            }
        }
        }} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
      },
      NavBarItem: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      icons: {
        height: 20,
        width: 20,
        resizeMode:'contain',
        margin:2,
      },
      dot: {
        height: 4,
        width: 4,
        alignSelf: 'center',
        marginBottom: 4,
      },
      othericons: {
        height: 20,
        width: 24,
        alignSelf: 'center',
        padding: 2,
        margin: 2,
        resizeMode: 'contain'
      },
      iconTextStyle: {
        alignSelf: 'center',
        fontSize: 12,
      },
})