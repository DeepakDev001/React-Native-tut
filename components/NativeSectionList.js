import React, { Fragment } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { SectionUserData } from './DummyArray/DummyArray'

const NativeSectionList = () => {
    //================= main_return_function ==================//
    return (
        <Fragment>
            <View style={style.viewContainer}>
                <Text style={style.text}>
                    Component In Loop With FlatList
                </Text>
            </View>
            <SectionList
                sections={SectionUserData}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={style.textHeader}>{name}</Text>
                )}
                scrollEnabled={false}
            />
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
    },
    textHeader: {
        fontSize: 23,
        color: "green",
        fontWeight: "bold",
    }
})
export default NativeSectionList