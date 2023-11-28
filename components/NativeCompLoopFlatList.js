import React, { Fragment } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import { UserArray } from './DummyArray/DummyArray'

const NativeCompLoopFlatList = () => {

    //  ============= pass_the_data_with_the_components
    const Userata = ({ item }) => {
        return (
            <View style={style.box}>
                <Text style={style.FlatListText}>{item.name}</Text>
                <Text style={style.FlatListText}>{item.email}</Text>
            </View>
        )
    }

    //================= main_return_function ==================//
    return (
        <Fragment>
            <View style={style.viewContainer}>
                <Text style={style.text}>
                    Component In Loop With FlatList
                </Text>
                <FlatList
                    data={UserArray}
                    renderItem={({ item }) => <Userata item={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </Fragment>
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
    box: {
        flexDirection: "row",
        borderColor: "red",
        borderWidth: 2
    },
    FlatListText: {
        fontSize: 24,
        color: "orange",
        flex: 1,
        margin: 2,
    }
})

export default NativeCompLoopFlatList