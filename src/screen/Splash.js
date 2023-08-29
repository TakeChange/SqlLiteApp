import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('demo');
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>***********</Text>
            <Text style={styles.text}>SQLLITE</Text>
            <Text style={styles.text}>PROJECT</Text>
            <Text style={styles.text}>***********</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        color: 'purple'
    }

})