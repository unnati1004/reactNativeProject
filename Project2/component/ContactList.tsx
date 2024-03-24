import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ContactList() {    
     const contacts =[
       {
          uuid:1,
          name:"YashRaj Gandhi",
          status:"Student",
          imageurl:'data:image/jpeg;base64,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',
       },
       {
          uuid:2,
          name:"Atul Gautam",
          status:"Yoga Trainer",
          imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yHi_beVfEFHenniFig_1ZQY7HXewFTRzOw&usqp=CAU',
       },
       {
          uuid:3,
          name:"Vishal jaiswal",
          status:"Business man",
          imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hONBfpr2xw02BVFkdB5APkHVMiHqOjJpWg&usqp=CAU',
       },
       {
          uuid:4,
          name:"Omkar Salunkhe",
          status:"Software Engineer",
          imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7a6PH4tUbalVEXYKPzWYQCrAHP6fWHeC1g&usqp=CAU',
       },
     ]   
return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
      {contacts.map(({uuid,name,status,imageurl})=>(
         <View key={uuid} style={styles.userCard}>
            <Image
               source={{
                  uri: imageurl
               }}
               style={styles.userImage}
            />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
         </View>
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
   headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
   container:{
      paddingHorizontal:16,
      marginBottom:4
   },
   userCard:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      marginBottom:4,
      backgroundColor:"#008000",
      padding:8,
      borderRadius: 10
   },
   userImage:{
      width:60,
      height:60,
      borderRadius: 30,
      marginRight:14
   },
   userName:{
      fontSize:16,
      fontWeight:'600',
      color:"#000000"
   },
   userStatus:{
      fontSize:12
   }
})