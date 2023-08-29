import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screen/Splash'
import Demo from './Demo'
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
                    name='demo'
                    component={Demo}
                    options={{ headerShown:false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator