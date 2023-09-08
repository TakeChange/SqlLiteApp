import { View, Text, TextInput, TouchableOpacity, Alert, ToastAndroid, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'

var db = openDatabase({ name: 'EmployeeDatabase.db' });

const SecondScreen = ({ navigation }) => {

  const [ename, setEname] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='employee'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS employee', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS employee(user_id INTEGER PRIMARY KEY AUTOINCREMENT, employee_name VARCHAR(20), employee_age INT(10), employee_address VARCHAR(50))',
              []
            );
          }
          else {
            console.log('Table already exits');
          }
        }
      );
    });
  }, [])

  const addEmployee = () => {
    var isValid = false;
    console.log(ename, age, address);

    if (ename != '' && age != '' && address != '') {
      isValid = true;
    }

    if (isValid == true) {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO employee (employee_name, employee_age, employee_address) VALUES (?,?,?)',
          [ename, age, address],
          (tx, results) => {
            console.log('Results', results);
            if (results.rowsAffected > 0) // 0>0  false   1>0 true
            {
              ToastAndroid.show('employee added successfully', ToastAndroid.SHORT);
              navigation.navigate('FirstScreen');
            }
            else {
              console.log('fail')
            }
          }
        );
      });
    }
    else{
      Alert.alert('Please enter the all filds');
    }
  }

  return (
    <View style={{ flex: 1, margin: 15 }}>
      <Text style={{ fontSize: 17, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: '15%' }}>Add Employee</Text>
      <View>

        <TextInput
          value={ename}
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center' }}
          placeholder='Enter employee name'
          onChangeText={(text) => setEname(text)}
        >
        </TextInput>

        <TextInput
          value={age}
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center' }}
          placeholder='Enter employee age'
          onChangeText={(text) => setAge(text)}
        >
        </TextInput>

        <TextInput
          value={address}
          style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 20, borderWidth: 2, alignItems: 'center', }}
          placeholder='Enter employee address'
          onChangeText={(text) => setAddress(text)}
        >
        </TextInput>

      </View>

      <TouchableOpacity style={{
        backgroundColor: '#800080', padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        marginTop: '30%'
      }} onPress={() => addEmployee()}>

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
