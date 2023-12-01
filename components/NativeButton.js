import React, { Fragment } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const NativeButton = () => {
    //============ main_return_function ============//
    return (
        <Fragment>
            <View style={style.viewContainer}>
                <Text style={style.text}>
                    style with Button
                </Text>
            </View>
            <View style={style.main}>
            <TouchableHighlight>
                    <Text style={style.ButtonPrimay}>Button</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[style.ButtonPrimay, style.success]}>Success</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[style.ButtonPrimay, style.primary]}>Primary</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[style.ButtonPrimay, style.warning]}>warning</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[style.ButtonPrimay, style.error]}>error</Text>
                </TouchableHighlight>
            </View>
        </Fragment>
    )
}
//========== style_sheet
const style = StyleSheet.style = ({
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
    main: {
        flex: 1,
    },
    ButtonPrimay: {
        backgroundColor: '#bbb',
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'red',
        elevation: 1,
        shadowOpacity: 1
    },
    success: {
        backgroundColor: "green",
    },
    primary: {
        backgroundColor: "blue",
    },
    warning: {
        backgroundColor: "gold",
    },
    error: {
        backgroundColor: "red",

    }
})
export default NativeButton