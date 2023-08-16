import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { CourseDetailsData } from '../../utils/DatasforComponents';
import { useNavigation } from '@react-navigation/native';

function Videos() {
  const navigation = useNavigation();
  const renderItems = ({ item, index }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('VideoPage') }}>
      <View>
        <Image style={styles.imgStyle} source={{ uri: item.image }}></Image>
        <View style={{
          position: 'absolute', backgroundColor: '#00C458', width: '20%',
          bottom: 0, right: 0, margin: 24
        }}>
          <Text style={{ margin: 2, color: 'white', alignSelf: 'center' }}>Biology</Text></View>
      </View>
      <View style={{
        width: '90%', alignSelf: 'center', margin: 12, marginBottom: 8,
        backgroundColor: 'white', alignItems: 'center', padding: 12,
      }}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>{item.title}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.container1}>
            <View style={[styles.outercircle, { borderColor: '#9F9F9F' }]}>
              <View style={[styles.innercircle, { backgroundColor: '#9F9F9F' }]}></View>
            </View>
            <Text style={[styles.textStyle, { color: '#9F9F9F' }]}>chapter1</Text>
          </View>
          <View style={styles.container1}>
            <View style={[styles.outercircle, { borderColor: '#9F9F9F' }]}>
              <View style={[styles.innercircle, { backgroundColor: '#9F9F9F' }]}></View>
            </View>
            <Text style={[styles.textStyle, { color: '#9F9F9F' }]}>3 parts</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1, marginTop: 16, }}>
      <FlatList
        data={CourseDetailsData}
        keyExtractor={(item, index) => index}
        renderItem={renderItems}
      />
    </View>
  )
}

export default Videos

const styles = StyleSheet.create({
  container: {

  },
  container1: {
    flexDirection: 'row',
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
  },
  imgStyle: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
  }
})