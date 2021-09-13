import React from "react"
import { StyleSheet, TouchableOpacity, Image, View } from "react-native"
import colors from "../../config/colors"

const Button = ({ onPress, active = false, primary, icon }) => {
  return (
    <TouchableOpacity
      accessible
      accessibilityLabel="tap me"
      style={{
        justifyContent: "space-between",
        flex: 1,
      }}
      onPress={onPress}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: active
              ? primary
                ? colors.primary
                : colors.lightPurple
              : colors.lightPurple,
            width: !primary ? 60 : 80,
            height: !primary ? 60 : 80,
            bottom: !primary ? 10 : 20,
            borderColor: !primary ? colors.lightPurple : colors.primary,
          },
        ]}
      >
        <Image source={icon} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 40,
    bottom: 30,
    height: 80,
    justifyContent: "center",
    width: 80,
    borderColor: colors.primary,
    borderWidth: 4,
    alignSelf: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
})
