import React, { Fragment, useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

const ActivityIndicatorBtn = () => {
    const [show, setShow] = useState(false)
    const toggleDisplayLoader = () => {
        setShow(true);

        // api call in 3 sec
        setTimeout(() => {
            setShow(false)
        }, 4000)
    }

    //============= main_return_function ===========//
    return (
        <Fragment>
            <View style={style.viewContainer}>
                <Text style={style.text}>
                    Activity Indicator (Loader)
                </Text>
            </View>
            <ActivityIndicator size={40} color="golden" animating={show} />
            <Button title='Show Loader' onPress={toggleDisplayLoader} />
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
})
export default ActivityIndicatorBtn