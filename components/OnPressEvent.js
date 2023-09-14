import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const OnPressEvent = () => {

    const pressBtn = () => {
        console.warn("function called")
    }

    //============ on press pass the data  ===============//
    const PressBtnone = (val) => {
        console.warn(val)
    }
    //================== Main_Return_Function =============//
    return (
        <View style={stylePressEvent.viewContainer}>
            <Text style={stylePressEvent.text}>
                Button and On Press Events
            </Text>
            <Button
                title='on Press'
                color={'green'}
                onPress={() => PressBtnone("Hello Deepak")}
            />
        </View>
    )
}

//================== Internal_ Css_Types =====================//

const stylePressEvent = StyleSheet.create({
    viewContainer: {
        padding: 5
    },
    text: {
        alignSelf: "center",
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
        marginBottom: 10
    }

})

export default OnPressEvent
