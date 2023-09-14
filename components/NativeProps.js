import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const NativeProps = () => {
    const [updateText, setUpdateText] = useState("Deepak")

    const UpdateText = (props) => {
        return (
            <View style={style.view}>
                <Text style={style.updateText}>Name: {props.name}</Text>
                <Button
                    title='Update Text'
                    onPress={() => setUpdateText('Yadav')}
                />
            </View>
        )
    }

    //=================== Main_Return_Function =====================//
    return (
        <View style={style.viewContainer}>
            <Text style={style.text}>
                Props In React Native
            </Text>
            <Text>:- It is an Argument / paraments of own components</Text>
            <Text>:- when You send the data , one componets to another components the use the props</Text>
            <Text style={{ color: "green" }}>
                Note :-  is this possible send the data child to parent components? :- Yes  with the help of LeaftingUp State
            </Text>
            <UpdateText name={updateText} />
        </View>
    )
}

//================== Internal_ Css_Types =====================//
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
    view: {
        marginTop: 5
    },
    updateText: {
        fontSize: 15,
        fontWeight: "bold",
    },
})
export default NativeProps
