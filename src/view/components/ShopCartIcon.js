import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function ShoppingCartIcon() {
  const navigation = useNavigation()
  const cartItems = useSelector(state => state)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Image style={styles.image_style} source={require('../assets/images/cart.png')}></Image>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  },
  image_style:{
    height:30,
    width:30,
    resizeMode:'contain'
  },
})

export default ShoppingCartIcon