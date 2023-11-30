import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const NativeUseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.warn("call UseEffect")
    }, [])
    //================ Main_Return_Function ===================//
    return (
        <View style={style.viewContainer}>
            <Text style={style.text}>Life Cycle With UseEffect</Text>
            <Text style={style.text}>{count}</Text>
            <Button onPress={() => setCount(count + 1)} title='updateCount' />
        </View>
    )
}
const style = StyleSheet.style = ({
    viewContainer: {
        padding: 5,
    },
    text: {
        alignSelf: "center",
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    },
})

export default NativeUseEffect