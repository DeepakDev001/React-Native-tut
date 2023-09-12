import React from 'react'
import { Button, Text, View } from 'react-native'

const Basics = () => {

  const name = "Deepak"
  let agr = 26
  let email_id = "deepak.iitn@gmail.com"

  //================ Main_Return_Function ==============//
  return (
    <View>
      <Text style={{ fontSize: 25, paddingBottom: 10, marginTop: 30 }}>
        Topic : view, text, button
      </Text>
      <Button title='Press here' />
      <Text style={{ fontSize: 20, marginTop: 30 }}>
        JSX ( power House of React Native )
      </Text>
      <Text>{name}</Text>
      <Text>{agr}</Text>
      <Text>{email_id}</Text>
      <Text style={{ fontSize: 20, marginTop: 30 }}>
        Components in React Native
      </Text>
      <Text style={{ color: "blue" }}>
        - it is a reusable code such as function
      </Text>
      <Text style={{ color: "blue" }}>
        - Two Types of Components
      </Text>
      <Text style={{ color: "green" }}>
        1- Functional
      </Text>
      <Text style={{ color: "green" }}>
        2- Class-based
      </Text>
    </View>
  )
}

export default Basics
