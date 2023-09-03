import { StyleSheet, Text, View, FlatList, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState,useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { openDatabase } from 'react-native-sqlite-storage';
import { useIsFocused } from '@react-navigation/native';

const FirstScreen1 = ({ navigation }) => {

  const db = openDatabase({ name: 'EmployeeDatabase.db' });
  const [Emp, setEmp] = useState([]);
  const [empList,setEmpList] = useState([])
  const isFocused = useIsFocused();
  useEffect(()=>{
    getData();
  },[isFocused])

  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM employee', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
        {
          temp.push(results.rows.item(i));
          console.log(results.rows.item(i))
        }
        setEmpList(temp);
      });
    });
  };

  const deleteEmp = (id) =>{
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM employee where user_id=?',
        [id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            ToastAndroid.show('record deleted successfully', ToastAndroid.SHORT);
            getData();
          }
        },
      );
    });
  }

  const EmpInfo = ({ item }) => {
    return (
      <View style={styles.Container}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#1D1E20' }}>Emp Name: {item.employee_name}</Text>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#1D1E20' }}>Emp Age: {item.employee_age}</Text>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#1D1E20' }}>Emp Address: {item.employee_address}</Text>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '6%', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateEmp',{data:item})}>
              <Text style={{ fontWeight: '900', color: 'white', backgroundColor: 'gray', padding: '5%', borderRadius: 10 }}> EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>deleteEmp(item.user_id)}>
              <Text style={{ fontWeight: '900', color: 'white', backgroundColor: 'gray', padding: '5%', borderRadius: 10 }}> DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    )
  }
  return (
    <View style={{flex:1}}>
      <View>
      <FlatList
        data={empList}
        renderItem={EmpInfo}
        keyExtractor={(item) => item.Employee}
      />
      </View>
      <View style={{ position:'absolute',bottom:10,alignSelf:'flex-end',right:10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
          <Ionicons name='add-circle' color='#1D1E20' size={60} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default FirstScreen1

const styles = StyleSheet.create({
  Container: {
    marginTop: '10%',
    backgroundColor: 'pink',
    borderRadius: 20,
    padding: '8%',
    justifyContent: 'center',
    margin: '6%'
  },

})