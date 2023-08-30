import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Demo = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('FirstScreen')}>
      <Text>Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Demo