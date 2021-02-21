import React from 'react'
import {  StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const player = () => {
    return (
        <View style={styles.container}>
            <View style={styles.playerContainer}>
                <Ionicons name="play-circle" size={60} color="black" />
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 20,}}>Track Name</Text>
                    <Text>Artist Name</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        marginBottom: 20
    },

    playerContainer: {
        flexDirection: 'row',

    }
})

export default player
