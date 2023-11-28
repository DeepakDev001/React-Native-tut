import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NativeSectionList = () => {
    //================= main_return_function ==================//
    return (
        <Fragment>
            <View style={style.viewContainer}>
                <Text style={style.text}>
                    Component In Loop With FlatList
                </Text>
            </View>
        </Fragment>
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
    }
})
export default NativeSectionList