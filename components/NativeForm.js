import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const NativeForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passwaord, setPassword] = useState("");
    const [show, setShow] = useState(false)

    const CleraData = () => {
        setShow(false);
        setName("");
        setEmail("");
        setPassword("");
    }

    //================ Main_return_Function ================//
    return (
        <View style={styleForm.viewContainer}>
            <Text style={styleForm.text}>
                Simple Form in React Native
            </Text>
            {
                show ?
                    <View style={styleForm.formOpBox}>


                        <Text>Name : {name}</Text>
                        <Text>Email : {email}</Text>
                        <Text>Passwaord : {passwaord}</Text>



                    </View> : null
            }

            <View style={styleForm.formBox}>
                <TextInput
                    style={styleForm.formTextInput}
                    placeholder='Enter User Name'
                    value={name}
                    onChangeText={(e) => setName(e)}
                />
                <TextInput
                    style={styleForm.formTextInput}
                    placeholder='Enter User Email'
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />
                <TextInput
                    secureTextEntry={true} // In Ture condition not show ur passwaord
                    style={styleForm.formTextInput}
                    placeholder='Enter User Passwaord'
                    value={passwaord}
                    onChangeText={(e) => setPassword(e)}
                />
                <View style={styleForm.btnBox}>
                    <Button
                        title='Print Data'
                        onPress={() => setShow(true)}
                    />
                </View>
                <View style={styleForm.btnBox}>
                    <Button
                        title='clear Data'
                        color={'red'}
                        onPress={CleraData}
                    />
                </View>
            </View>

        </View>
    )
}

//================== Internal_ Css_Types =====================//

const styleForm = StyleSheet.create({
    viewContainer: {
        padding: 5,
    },
    formBox: {
        marginTop: 10,
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        elevation: 2
    },
    formOpBox: {
        marginTop: 10,
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        elevation: 2
    },
    text: {
        alignSelf: "center",
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    },
    formTextInput: {
        marginTop: 10,
        borderColor: "gray",
        borderWidth: 1,
        fontSize: 15,
        padding: 5,
        textAlignVertical: "center"
    },
    btnBox: {
        marginTop: 15
    }
})

export default NativeForm
