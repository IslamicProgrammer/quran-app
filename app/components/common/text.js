import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import colors from "../../config/colors"
import AppLoading from "expo-app-loading"
import { Text } from "react-native-elements"
import { useFonts } from "@expo-google-fonts/poppins"

const AppText = ({
  color = "secondary",
  weight = "Poppins-Regular",
  children,
  style,
  ...args
}) => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Black": require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Semibold": require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Text
        style={[
          styles.text,
          { color: colors[color], fontFamily: weight },
          style,
        ]}
        {...args}
      >
        {children}
      </Text>
    )
  }
}

export default AppText

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
})
