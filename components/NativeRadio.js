import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NativeRadio = () => {
    const [check, setCheck] = useState(1)
    //============ main_return_function ============//
    return (
        <Fragment>
            <View style={style.viewContainer}>
                <Text style={style.text}>
                    Radio Button
                </Text>
            </View>

            <View style={style.main}>
                <View style={style.RadioWrapper}>
                    <TouchableOpacity onPress={() => setCheck(1)}>
                        <View style={style.RadioStyle}>
                            {check === 1 ? <View style={style.RadioBg}></View> : null}
                        </View>
                    </TouchableOpacity>
                    <Text style={style.RadioText}>
                        Radio 1
                    </Text>
                </View>
                <View style={style.RadioWrapper}>
                    <TouchableOpacity onPress={() => setCheck(2)}>
                        <View style={style.RadioStyle}>
                            {check === 2 ? <View style={style.RadioBg}></View> : null}
                        </View>
                    </TouchableOpacity>
                    <Text style={style.RadioText}>
                        Radio 2
                    </Text>
                </View>
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
export default NativeRadio