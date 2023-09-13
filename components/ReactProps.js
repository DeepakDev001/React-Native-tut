import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ReactProps = () => {
    const [updateText, setUpdateText] = useState("Deepak")

    const UpdateText = (props) => {
        return (
            <View style={style.view}>
                <Text style={style.text}>Name: {props.name}</Text>
                <Button
                    title='Update Text'
                    onPress={() => setUpdateText('Yadav')}
                />
            </View>
        )
    }

    //=================== Main_Return_Function =====================//
    return (
        <View>
            <Text style={{ fontSize: 25, color: "red" }}>
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
    view: {
        marginTop: 5
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
    }
})
export default ReactProps
