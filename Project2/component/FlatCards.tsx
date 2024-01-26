import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
          <View style={[styles.card,styles.cardOne]}>
            {/* <Text>Red</Text> */}
            {/* <Image source={}/> */}
          </View>
          <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
          </View> 
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
          headingText:{
            fontSize:24,
            fontWeight:"bold",
            paddingHorizontal:8,
          },
          container:{
            flex:1,
            flexDirection:'row',
            padding:28,
          },
          card:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            width:100,
            height:100,
            borderRadius:4,
            margin:8
          },
          cardOne:{
            backgroundColor: '#EF5354'
          },
          cardTwo:{
            backgroundColor: '#0000FF'
          },
          cardThree:{
            backgroundColor:'#008000'
          }
})