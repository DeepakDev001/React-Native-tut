import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const NativeShowHide = () => {
    const [show, setShow] = useState(true)
    const UserData = () => (
        <View>
            <Text style={style.textUser}> UserData</Text>
        </View>
    )
    //================ Main_Return_Function ===================//
    return (
        <View style={style.viewContainer}>
            <Text style={style.text}>
                Show Hide Components
            </Text>
            {show ? <UserData /> : null}
            <Button
                onPress={() => setShow(!show)}
                title={show ? "hideComponent" : 'ShowComponent'}
            />
        </View>

    )
}
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
    textUser: {
        alignSelf: "center",
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
        marginBottom: 10

    }
})


export default NativeShowHide