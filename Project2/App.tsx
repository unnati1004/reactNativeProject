import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './component/FlatCards'
import ElevatedCard from './component/ElevatedCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCards/>
        <ElevatedCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App