import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const NativeList = () => {

    //=============== Dummy Data
    const User = [
        {
            id: 1,
            name: "kajal"
        },
        {
            id: 2,
            name: "smriti"
        },
        {
            id: 3,
            name: "ritika"
        },
        {
            id: 4,
            name: "mohit"
        },
        {
            id: 5,
            name: "shana"
        }
    ]

    //================= main_return_function ==================//
    return (
        <View style={style.viewContainer}>
            <Text style={style.text}>
                List with FlatList components
            </Text>
            <FlatList
                data={User}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Text style={style.flatListText} key={item.id}>
                        {item.name}
                    </Text>
                }
            />
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
    flatListText: {
        fontSize: 22,
        fontWeight: "bold"
    }

})

export default NativeList
