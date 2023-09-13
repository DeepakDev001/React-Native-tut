import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const ReactState = () => {
  const [name, setName] = useState("Deepak");
  const [data, setData] = useState(0);

  //================= Main_Return_Function =============//
  return (
    <View>
      <Text style={{ fontSize: 25, marginTop: 20, color: "red" }}>
        State In React Native
      </Text>
      <Text>{name}</Text>
      <Button
        title='Update Name '
        onPress={() => setName("Yadav")}
      />
      <Text style={{ fontSize: 24, marginTop: 15 }} >Counter Function</Text>
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

export default ReactState
