import React from 'react'
import { Button, Text, View } from 'react-native'

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
        <View>
            <Text style={{ fontSize: 25, marginTop: 20, color: "red", paddingBottom: 20 }}>
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

export default OnPressEvent
