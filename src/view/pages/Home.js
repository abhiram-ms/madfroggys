import React, { useRef, useState } from 'react'
import { Animated, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
//components
import ListComponent from '../components/ListComponent';
import CourseVideoList from '../components/courseVideoList';
import ClassList from '../components/ClassList';
import ImageDecorBox from '../components/ImageDecorBox';
import Drawer from './Drawer';

function Home() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  // Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, }}>
      <Drawer showMenu={showMenu} onSetShowMenu={setShowMenu}></Drawer>
      <Animated.View style={[styles.container, {
        transform: [
          { scale: scaleValue }, { translateX: offsetValue }
        ]
      }]}>
        <ScrollView style={styles.container}>
          <View style={styles.container1}>
            <View style={{ position: 'absolute', marginLeft: '65%',}}>
              <Image style={{ width: 250, height: 250,marginTop:70 }} source={require('../assets/images/decorwhite.png')}></Image>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()
                setShowMenu(!showMenu);
              }}>
                <View style={{ flexDirection: 'row', }}>
                  <View style={styles.smallDotInside}></View>
                  <View style={styles.smallDotInside}></View>
                  <View></View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                  <View style={styles.smallDotInside}></View>
                  <View style={styles.smallDotInside}></View>
                  <View></View>
                </View>
              </TouchableOpacity>
            </View>
            <Image style={styles.image_style} source={require('../assets/images/logo.png')}></Image>
            <TouchableOpacity
              onPress={() => { }}
              style={styles.itemViewStyle}>
              <View style={styles.circle}></View>
              <Text style={styles.textStyle}>Classes</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>Goodmorning</Text>
          <Text style={styles.text2}>Aaron Taylor</Text>
          <ImageDecorBox></ImageDecorBox>
          <ListComponent></ListComponent>
          <CourseVideoList></CourseVideoList>
          <ClassList></ClassList>
        </ScrollView>
      </Animated.View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    backgroundColor: 'white',

  },
  text1: {
    fontWeight: '100',
    marginLeft: 8,
    color: '#002333'
  },
  text2: {
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
    color: '#002333',
    fontSize: 24,
  },

  //topbar style
  container1: {
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft: 8,
    marginTop: 8,
    alignItems: 'center'
  },
  image_style: {
    height: 60,
    width: 150,
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallDotInside: {
    backgroundColor: '#00C458',
    height: 8,
    width: 8,
    margin: 2,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 14,
    padding: 2,
    fontWeight: 'bold',
    color: '#00C458',
    marginLeft: 4,
  },
  circle: {
    width: 16,
    height: 16,
    backgroundColor: '#007345',
    borderRadius: 12,
    alignSelf: 'center',
    padding: 2,
    marginLeft: 4,
  },
  itemViewStyle: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#00C458',
    height: 35,
    marginLeft: 40,
  },

})