import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React, {useState }  from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FirstScreen = ({ navigation }) => {
  
    const Employee = [
        {
          Emp_Name:'Mr.Sharma',
          Emp_Age:30,
          Emp_Address:'Pune',
        },
        {
          Emp_Name:'Mr.Gupta',
          Emp_Age:35,
          Emp_Address:'Nashik', 
        },
    ];    const EmpInfo = ({ item }) => {
      return (
        <View style={styles.Container}>
          <View style={styles.empstyle}>
            <Text style={{ fontSize: 15,fontWeight:'900',color: '#1D1E20', }}>Emp Name: {item.Emp_Name}</Text>
            <Text style={{ fontSize: 15, fontWeight: '900',color: '#1D1E20', }}>Emp Age: {item.Emp_Age}</Text>
            <Text style={{ fontSize: 15, fontWeight: '900',color: '#1D1E20',height:'20%'}}>Emp Address: {item.Emp_Address}</Text>
            

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:'10%' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('UpdateEmp')}>
                    <Text style={{fontWeight:'900',color:'white',backgroundColor:'gray',padding:15,borderRadius:10}}> EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontWeight:'900',color:'white',backgroundColor:'gray',padding:15,borderRadius:10}}> DELETE</Text>
                </TouchableOpacity>
                
             </View>
             
            </View> 
            
        </View>
         
      )
    }
  return (
    <View>
    <FlatList
            data={Employee}
            renderItem={EmpInfo}
            keyExtractor={(item) => item.Employee}
          />
          <View style={{marginTop:'40%',marginLeft:'75%'}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('AddEmployee')}>
                  <Ionicons name='add-circle' color='#1D1E20' size={60} />
                  </TouchableOpacity>
              </View>
    </View>
    
  )
}
export default FirstScreen

const styles = StyleSheet.create({
  Container:{
    marginTop:'10%',
    backgroundColor: 'pink',
    borderRadius:20,
    padding:30,
    width:320,
    margin:20
  },
  empstyle:{
    padding:20,
    height:130
  }
})