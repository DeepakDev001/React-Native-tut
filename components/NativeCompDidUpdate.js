import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const NativeCompDidUpdate = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(100)  
    useEffect(() => {
        console.warn("call UseEffect")
    }, [count])
    useEffect(() => {
        console.warn("getApi data")
    }, [data])
    //================ Main_Return_Function ===================//
    return (
        <View style={style.viewContainer}>
            <Text style={style.text}>UseEffect as ComponentDidUpdate</Text>
            <Text style={style.text}>{count}</Text>
            <Button  onPress={() => setCount(count + 1)} title='updateCount' />
            <View style={{ marginTop: 10 }}>
                <Text style={style.text}>{data}</Text>
                <Button onPress={() => setData(data + 1)} title='DataUpdate' />
            </View>
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
})

export default NativeCompDidUpdate