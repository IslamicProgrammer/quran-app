import React from "react"
import { View, StyleSheet } from "react-native"
import { colors } from "react-native-elements"
import { Text } from "../common"

const Title = () => {
  return (
    <View style={styles.container}>
      <Text h4>Asslamualaikum</Text>
      <Text weight="bold" h3 color="Poppins-Semibold">
        Tanvir Ahassan
      </Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    padding: 10,
  },
})
