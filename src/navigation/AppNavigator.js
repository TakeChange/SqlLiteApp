import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screen/Splash'
import Demo from './Demo'
import FirstScreen from '../screen/FirstScreen'
import SecondScreen from '../screen/SecondScreen'
import ThirdScreen from '../screen/ThirdScreen'
const AppNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    name='Splash1'
                    component={Splash}
                    options={{ headerShown:false }}
                />
               
                <Stack.Screen
                    name='FirstScreen'
                    component={FirstScreen}
                    options={{ headerShown:false }}
                />
                 <Stack.Screen
                    name='SecondScreen'
                    component={SecondScreen}
                    options={{ headerShown:false }}
                />
                <Stack.Screen
                    name='UpdateEmp'
                    component={ThirdScreen}
                    options={{ headerShown:false }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator