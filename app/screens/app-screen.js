import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "../components/common"

const AppScreen = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", lineHeight: 900 }} h2 color="primary">
        App Screen
      </Text>
    </View>
  )
}

export default AppScreen

const styles = StyleSheet.create({})
