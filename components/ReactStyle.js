import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ExStyle } from '../StyleSheets'

const ReactStyle = () => {

    //=================== Main_Return_Function ==================//
    return (
        <View style={ExStyle.ViewContainer}>
            <Image
                style={ExStyle.tinyLogo}
                source={{
                    uri: 'https://avatars.githubusercontent.com/u/130967081?s=400&u=fd52537ecb20c7c676e880fcce19fccb1ea671aa&v=4',
                }}
            />
            <Text style={ExStyle.textArea}>
                Welcome to Deepak
            </Text>
            <Text style={ExStyle.subTextArea}>
                As an adept Android Developer,
                I specialize in crafting impactful,
                user-friendly mobile applications with a solid foundation in React-Native,
                delivering robust, efficient, and visually stunning Android experiences.
            </Text>
            <TouchableOpacity style={ExStyle.appButtonContainer}>
                <Text style={ExStyle.appButtonText}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ReactStyle
