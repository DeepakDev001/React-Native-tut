import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SkillRadioData } from './DummyArray/DummyArray'

const NativeRadioDyn = () => {
    const [check, setCheck] = useState(2)

    //============ main_return_function ============//
    return (
        <Fragment>
            <View style={style.viewContainer}>
                <Text style={style.text}>
                    Radio Button Dynamic
                </Text>
            </View>

            <View style={style.main}>
                {
                    SkillRadioData.map((item, index) => (
                        <View style={style.RadioWrapper}>
                            <TouchableOpacity key={index} onPress={() => setCheck(item.id)}>
                                <View style={style.RadioStyle}>
                                    {check === item.id ? <View style={style.RadioBg}></View> : null}
                                </View>
                            </TouchableOpacity>
                            <Text style={style.RadioText}>
                                {item.name}
                            </Text>
                        </View>
                    ))
                }

            </View>
        </Fragment>
    )
}
//========== style_sheet
const style = StyleSheet.style = ({
    viewContainer: {
        padding: 5,
        flex: 1
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
        alignItems: "center",
        justifyContent: "center"
    },
    RadioText: {
        fontSize: 20,
        color: "skyblue"
    },
    RadioStyle: {
        width: 40,
        height: 40,
        backgroundColr: "black",
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    RadioWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    RadioBg: {
        backgroundColor: "black",
        width: 28,
        height: 28,
        borderRadius: 20,
        margin: 4
    }
})
export default NativeRadioDyn