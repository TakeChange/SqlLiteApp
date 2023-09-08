import { View, Text, TextInput, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage'



const ThirdScreen = ({ navigation }) => {
  const db = openDatabase({ name: 'EmployeeDatabase.db' });
  const [ename, setEname] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const route = useRoute();

  useEffect(()=>{
   setEname(route.params.data.employee_name)
   setAge(route.params.data.employee_age.toString()) 
   setAddress(route.params.data.employee_address)
  },[])

  const updateEmployee = () => {

    var isValid = false;
    console.log(ename, age, address);

    if (ename != '' && age != '' && address != '') {
      isValid = true;
    }

    if (isValid == true) 
    {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE employee set employee_name=?, employee_age=? , employee_address=? where user_id=?',
          [ename, age, address, route.params.data.user_id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0)
            {
              ToastAndroid.show('employee updated successfully', ToastAndroid.SHORT);
              navigation.navigate('FirstScreen');
            } 
            else
            {
              alert('Updation Failed');
            }
          },
        );
      });
    }
    else
    {
      alert('Please enter the all fields');
    }
  };

  return (
    <View style={{ flex: 1, margin: 15 }}>
      <Text style={{ fontSize: 17, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: '15%' }}>Update Employee</Text>
      <View>

        <TextInput
          value={ename}
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center' }}
          placeholder='Enter employee name'
          onChangeText={(text)=>setEname(text)}
          >
        </TextInput>

        <TextInput
          value={age}
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center' }}
          placeholder='Enter employee age'
          onChangeText={(text)=>setAge(text)}
          >
        </TextInput>

        <TextInput
          value={address}
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center', }}
          placeholder='Enter employee address'
          onChangeText={(text)=>setAddress(text)}
          >
        </TextInput>

      </View>

      <TouchableOpacity style={{
        backgroundColor: '#800080', padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        marginTop: '30%'
      }} onPress={()=>updateEmployee()}>
         
        <Text style={{
          textAlign: 'center',
          color: '#FFFFFF',
          fontSize: 17,
        }}>
          Update Employee
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ThirdScreen
