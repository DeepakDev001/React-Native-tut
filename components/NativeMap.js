import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NativeMap = () => {

    //=============== Dummy Data
    const User = [
        {
            id: 1,
            name: "Deepak"
        },
        {
            id: 2,
            name: "shiyam"
        },
        {
            id: 3,
            name: "Radha"
        },
        {
            id: 4,
            name: "mohit"
        },
        {
            id: 5,
            name: "shana"
        },
        {
            id: 6,
            name: "Bharat"
        },
        {
            id: 7,
            name: "Ajay"
        },
        {
            id: 8,
            name: "Gaja"
        }
    ]


    //===================== Main_return_function ================//
    return (
        <View style={style.viewContainer}>
            <Text style={style.text}>
                List with Map Function
            </Text>
            {
                User.map((item, index) => (
                    <Text key={index} style={style.MapListText}>{item.name}</Text>
                ))
            }

        </View>
    )
}

const style = StyleSheet.create({
    viewContainer: {
        padding: 5
    },
    text: {
        alignSelf: "center",
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    },
    MapListText: {
        fontSize: 22,
        fontWeight: "bold"
    }

})

export default NativeMap
