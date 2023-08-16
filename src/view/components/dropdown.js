import React,{useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    StyleSheet,} from 'react-native'

const states = ["kerala",'tamil nadu','telengana','andra pradesh','karnataka']

const Dropdown = (props) => {

    const [selectedState,setSelectedState] = useState(props.defaultText != null ? props.defaultText:'pick one');
    const [isclicked, setIsClicked] = useState(false);
    const [data, setData] = useState(states);

  return (
    <View style={[styles.container,{borderColor:props.containerColor != null ? props.containerColor:'transparent'}]}>
        <TouchableOpacity style={styles.dropdown_selector}
         onPress={()=>{
            setIsClicked(!isclicked)
            }}>
            <Text style={{color:'#446270'}}>{selectedState == '' ? 'Select one' : selectedState}</Text>
            {isclicked? (
                <Image source={require('../assets/images/upload.png')} style={styles.icon}></Image>
            ):(
                <Image source={require('../assets/images/dropdown.png')} style={styles.icon}></Image>
            )}
        </TouchableOpacity>
        {isclicked ? (
        <View
          style={{
            position:'absolute',
            bottom:40,
            elevation: 5,
            marginTop: 20,
            height:'300%',
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#062E40',
            borderRadius: 10,
          }}>

          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    setSelectedState(item);
                    setIsClicked(!isclicked);
                  }}>
                  <Text style={{fontWeight: '600',color:'#446270'}}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  )
}

export default Dropdown

const styles =(props)= StyleSheet.create({
    container:{
        flex:2,
        backgroundColor:'#062E40',
        margin:2,
        zIndex:95,
        borderWidth:1,
    },
    dropdown_selector:{
        width:'100%',
        height:'100%',
        alignSelf:'center',
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:4,
        paddingRight:15,
    },
    icon:{
        width:'5%',
        height:'20%',
        alignSelf:'center',
    },
})

