import React, { useRef, useState } from 'react';
import { Animated, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Detailname from '../components/Detailname';
import { CourseDetailsData, subjects } from '../../utils/DatasforComponents';
import { useNavigation } from '@react-navigation/native';



function CourseDetails() {
    const navigation = useNavigation();
    const renderItems = ({ item, index }) => (
        <TouchableOpacity onPress={()=>{navigation.navigate('Chapter')}}>
            <View style={{
                width: '80%', alignSelf: 'center', margin: 12, marginBottom: 8,
                backgroundColor: 'white', alignItems: 'center',
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
        <View style={styles.container}>
            <View style={styles.topViewParent}>
                <View style={{ position: 'absolute', marginLeft: '50%', top: -40 }}>
                    <Image style={{ width: 350, height: 250, }}
                        source={require('../assets/images/decor.png')}></Image>
                </View>
                <Image style={{ width: 24, height: 24, margin: 16 }}
                    source={require('../assets/images/goback.png')}></Image>
                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', margin: 16 }}>Biology</Text>
                <View style={{ flexDirection: 'row' }}>
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
            </View>
            <View style={[styles.bottomViewParent, {}]}>
                <View style={styles.container2}>
                    <FlatList
                        data={CourseDetailsData}
                        keyExtractor={(item, index) => index}
                        renderItem={renderItems}
                    />
                </View>
            </View>
        </View>
    )
}

export default CourseDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        position: 'absolute',
        alignSelf: 'center',
        top: -40,
        width: '100%',
        height:'100%'
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
    }
})