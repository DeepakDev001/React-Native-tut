import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const NativeState = () => {
  const [name, setName] = useState("Deepak");
  const [data, setData] = useState(0);

  //================= Main_Return_Function =============//
  return (
    <View style={styleState.viewContainer}>
      <Text style={styleState.text}>
        State In React Native
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }} >
        Difference between State and  Variable
      </Text>
      <Text >
        State : - when you Update the value, component will be re-rendering
      </Text>
      <Text >
        State : -state not use the outside the components
      </Text>
      <Text >
        Variable: -when you Update the Variable, component will be not re-renderings
      </Text>
      <Text style={{ fontSize: 18, color: "green" }}>{name}</Text>
      <Button
        title='Update Name '
        onPress={() => setName("Yadav")}
      />
      <Text style={{ fontSize: 20, }} >Counter Function</Text>
      <Button
        title='Increment'
        onPress={() => setData(data + 1)}
      />
      <Text>{data}</Text>
      <Button
        title='Decrement'
        onPress={() => setData(data - 1)}
      />
    </View>
  )
}

//================== Internal_ Css_Types =====================//

const styleState = StyleSheet.create({
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

export default NativeState
