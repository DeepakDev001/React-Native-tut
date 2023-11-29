import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NativeRespGrid = () => {
    //============ main_return_function ===========//
    return (
        <View style={style.viewContainer}>
            <View style={style.viewContainerOne}>
                <View style={style.Box1}>
                    <Text style={style.BoxText}>Box 1</Text>
                </View>
                <View style={style.Box2}>
                    <Text style={style.BoxText}>Box 2</Text>
                </View>
                <View style={style.Box3}>
                    <Text style={style.BoxText}>Box 3</Text>
                </View>
            </View>
            <View style={style.viewContainerTwo}></View>
            <View style={style.viewContainerThree}></View>
        </View>
    )
}
const style = StyleSheet.style = ({
    viewContainer: {
        flex: 1,
    },
    viewContainerOne: {
        flex: 2,
        flexDirection: "row"
    },
    viewContainerTwo: {
        flex: 1,
        backgroundColor: 'blue'
    },
    viewContainerThree: {
        flex: 1,
        backgroundColor: 'green'
    },
    Box1: {
        flex: 1,
        backgroundColor: "yellow",
        borderWidth: 2,
        borderColor: "red"
    },
    Box2: {
        flex: 1,
        backgroundColor: "orange",
        borderWidth: 2,
        borderColor: "red"
    },
    Box3: {
        flex: 1,
        backgroundColor: "black",
        borderWidth: 2,
        borderColor: "red"
    },
    BoxText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "green"

    }
})

export default NativeRespGrid