import React from "react";

import { StyleSheet, Text, View, useColorScheme } from "react-native"

function AppPro():JSX.Element{
     const isDarkMode = useColorScheme() === 'dark';

          return(
                    <View style={styles.container}>
                        <Text style={isDarkMode ? styles.darkText :styles.darkText}>
                           Hello       
                        </Text>      
                    </View>
          )
}

const styles = StyleSheet.create({
     container:{
          // border: 2px solid black,
          flex:1,
          alignItems:"center",
          justifyContent:"center",
     },
      whiteText:{
          color: '#FFFFFF'
      },
     darkText:{
          color: '#000000'
     }
})

export default AppPro