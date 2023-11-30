import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Basics from './Basics'
import OnPressEvent from './OnPressEvent'
import NativeState from './NativeState'
import NativeProps from './NativeProps'
import NativeForm from './NativeForm'
import NativeList from './NativeList'
import NativeMap from './NativeMap'
import NativeGrid from './NativeGrid'
import NativeCompLoopFlatList from './NativeCompLoopFlatList'
import NativeSectionList from './NativeSectionList'
import NativeUseEffect from './NativeUseEffect'
import NativeCompDidUpdate from './NativeCompDidUpdate'
import NativeShowHide from './NativeShowHide'



const ListView = () => {

    //================ Main_Return_Function ===================//
    return (
        <View style={StyleView.ListContainer}>
            <StatusBar
                backgroundColor={'orange'}
                barStyle={'default'}
                hidden={false} // In Flase Condition By Default Active StausBar
            />
            <Text style={StyleView.TextHeading}>React Native Tut</Text>
            <ScrollView style={StyleView.scrollView}>
                <Basics />
                <OnPressEvent />
                <NativeState />
                <NativeProps />
                <NativeForm />
                <NativeList />
                <NativeMap />
                <NativeGrid />
                <NativeCompLoopFlatList />
                <NativeSectionList />
                <NativeUseEffect />
                <NativeCompDidUpdate />
                <NativeShowHide />
            </ScrollView>
        </View>
    )
}

//================== Internal_ Css_Types =====================//
const StyleView = StyleSheet.create({
    TextHeading: {
        padding: 5,
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "center",
        textAlignVertical: "center",
        color: "blue"

    },
    ListContainer: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 5
    },
    scrollView: {
        marginBottom: 10,

    }
})

export default ListView
