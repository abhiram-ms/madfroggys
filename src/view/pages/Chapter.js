import React from 'react'
import { Animated, View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ChapterTest from './ChapterTest';
import Resources from './Resources';
import QnBank from './QnBank';
import Videos from './Videos';

const Tab = createMaterialTopTabNavigator();

function MyTab(){
    return(
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle:{fontSize:10},
            tabBarItemStyle:{width:100,},
            tabBarStyle:{backgroundColor:'#00202F',marginTop:12},
            tabBarIndicatorStyle: {backgroundColor: '#00C458',height:4,}
          }}>
          <Tab.Screen name='Videos' component={Videos}
          options={{
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'#83A1AF',
            // tabBarIcon:(focused)=>focused?<Icon name='home' size={24} color='#fff'/>:<Icon name='home' size={24} color='grey'/>
          }}/>
          <Tab.Screen name='ChapterTest' component={ChapterTest}
          options={{
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'#83A1AF',
            // tabBarIcon:(focused)=>focused?<Icon name='category' size={24} color='#fff'/>:<Icon name='category' size={24} color='grey'/>
          }}/>
          <Tab.Screen name='Resources' component={Resources}
          options={{
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'#83A1AF',
            // tabBarIcon:(focused)=>focused?<Icon name='favorite' size={24} color='#fff'/>:<Icon name='favorite' size={24} color='grey'/>
          }}/>
          <Tab.Screen name='QnBank' component={QnBank}
          options={{
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'#83A1AF',
            // tabBarIcon:(focused)=>focused?<Icon name='shopping-cart' size={24} color='#fff'/>:<Icon name='shopping-cart' size={24} color='gray'/>
          }}/>
        </Tab.Navigator>
     
    )
  }
  

function Chapter() {
    return (
        <View style={styles.container}>
            <View style={styles.topViewParent}>
                <View style={{ position: 'absolute', marginLeft: '50%', top: -40 }}>
                    <Image style={{ width: 350, height: 250,resizeMode:'contain'}}
                        source={require('../assets/images/decor.png')}></Image>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 24, height: 24, margin: 16 }}
                        source={require('../assets/images/goback.png')}></Image>
                    <Text style={{ fontSize: 24, color: 'white', margin: 16 }}>Biology</Text>
                </View>
                <Text style={{
                    fontSize: 24, color: 'white', width: '75%',
                    fontWeight: 'bold', margin: 16,marginTop:4,
                }}>Long chapter name can be shown here</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.container1}>
                        <View style={[styles.outercircle, { borderColor: '#00C458' }]}>
                            <View style={[styles.innercircle, { backgroundColor: '#00C458' }]}></View>
                        </View>
                        <Text style={[styles.textStyle, { color: '#00C458' }]}>12 chapters</Text>
                    </View>
                    <View style={styles.container1}>
                        <View style={[styles.outercircle, { borderColor: '#00C458' }]}>
                            <View style={[styles.innercircle, { backgroundColor: '#00C458' }]}></View>
                        </View>
                        <Text style={[styles.textStyle, { color: '#00C458' }]}>124 hours</Text>
                    </View>
                </View>
                <MyTab ></MyTab>
            </View>
        </View>
    )
}

export default Chapter

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flexDirection:'row',
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
    }
})