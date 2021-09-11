import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import Constants from "expo-constants"
import colors from "../../config/colors"

const Screen = ({ children, style }) => (
  <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.white,
  },
})

export default Screen
