import { View, Text, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'


const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <Text style={{ fontSize: 17, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: '15%' }}>Add Employee</Text>
      <View>

        <TextInput
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center' }}
          placeholder='Enter employee name'>
        </TextInput>

        <TextInput
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center' }}
          placeholder='Enter employee age'>
        </TextInput>

        <TextInput
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center', }}
          placeholder='Enter employee address'>
        </TextInput>

      </View>

      <TouchableOpacity style={{
        backgroundColor: '#800080', padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        marginTop: '30%'
      }} onPress={()=>navigation.navigate('FirstScreen')}>
         
        <Text style={{
          textAlign: 'center',
          color: '#FFFFFF',
          fontSize: 17,
        }}>
          Save Employee
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SecondScreen
