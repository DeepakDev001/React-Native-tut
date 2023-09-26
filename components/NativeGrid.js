import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NativeGrid = () => {

    //================= Dummy_Data ===============//

    const UserData = [
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

    //================== main_return_function ======================//
    return (
        <View style={style.viewContainer}>
            <Text style={style.text}>
                Make Dynamic Grid
            </Text>
            <View style={style.gridContainer}>
                {
                    UserData.map((item, index) => (
                        <Text key={index} style={style.textItem}>{item.name}</Text>
                    ))
                }
            </View>
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
    gridContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    textItem: {
        fontSize: 25,
        backgroundColor: "blue",
        color: "#fff",
        margin: 5,
        padding: 5,
        width: 100,
        height: 100,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 4
    }
})

export default NativeGrid
