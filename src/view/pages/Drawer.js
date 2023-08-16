import React from 'react'
import { StyleSheet,View,Text, Image,TouchableOpacity,ScrollView} from 'react-native';

function Drawer(showMenu,onSetShowMenu) {
  return (
    <ScrollView style={{flex:1}}>
        <View style={{backgroundColor:'#002333',}}>
            <TouchableOpacity onPress={()=>{onSetShowMenu=!showMenu}}>
                <Image style={styles.closebutton} source={require('../assets/images/Menu.png')}></Image>
            </TouchableOpacity>
            <View style={styles.parentInfo}>
                <Image style={styles.ImageStyle} source={require('../assets/images/profileImage.jpg')}></Image>
                <View style={{justifyContent:'center'}}>
                    <Text style={styles.infoText}>Aron Taylor</Text>
                    <Text style={[styles.infoText,{fontWeight:'normal',color:'#6A828E'}]}>ID : 1234</Text>
                </View>
                <Image style={{width:8,height:8,marginLeft:24,}} source={require('../assets/images/arrowLeft.png')}></Image>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={styles.rectangleView}></View>
                    <Text style={styles.itemText}>Exam corner</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={styles.rectangleView}></View>
                    <Text style={styles.itemText}>Subrscriptions</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={styles.rectangleView}></View>
                    <Text style={styles.itemText}>Analytics</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={styles.rectangleView}></View>
                    <Text style={styles.itemText}>Downloads</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={styles.rectangleView}></View>
                    <Text style={styles.itemText}>Notifications</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={styles.rectangleView}></View>
                    <Text style={styles.itemText}>Referrals</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={styles.rectangleView}></View>
                    <Text style={styles.itemText}>Share app</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <View>
                <View style={styles.itemView}>
                    <View style={[styles.rectangleView,{borderColor:'#E14949'}]}></View>
                    <Text style={[styles.itemText,{color:'#E14949'}]}>Logout</Text>
                </View>
                <View style={styles.divider}></View>
            </View>
            <TouchableOpacity style={{borderWidth:1,borderColor:'#00C458',width:'30%',margin:30,padding:8,}}>
                <Text style={{color:'#00C458',alignSelf:'center'}}>Enquire now</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Drawer

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#002333'
    },
    closebutton:{
        height:24,
        width:24,
        margin:16,
    },
    parentInfo:{
        marginLeft:8,
        marginTop:16,
        flexDirection:'row',
        padding:2,
        alignItems:'center'
    },
    ImageStyle:{
        width:60,
        height:60,
        borderRadius:30,
        resizeMode:'contain',
        borderWidth:4,
        borderColor:'#00C458'
    },
    infoText:{
        color:'white',
        fontWeight:'bold',
        marginLeft:16,
    },
    itemView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
        marginTop:24
    },
    rectangleView:{
        height:30,
        width:30,
        borderWidth:1,
        borderColor:'#00C458',
        margin:8,
        marginTop:16,
        borderRadius:4,
    },
    itemText:{
        color:'white',
        marginLeft:8,
    },
    divider:{
        height:1,
        width:'50%',
        backgroundColor:'#6A828E',
        marginLeft:16,
        marginTop:4,
    }

})
