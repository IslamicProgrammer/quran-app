import React from "react"
import { View, Text } from "react-native"

const MainDetails = ({ navigation, route }) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  )
}

export default MainDetails
