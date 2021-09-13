import React from "react"
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native"
import { Screen } from "../components/common"
import { Button } from "react-native-elements"
import { Text } from "../components/common"
import * as Linking from "expo-linking"
import colors from "../config/colors"

const WelcomeScreen = ({ navigation }) => {
  const handleOpen = () => {
    Linking.openURL("https://instagram.com/azamov_dev")
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title} h3 color="primary" weight="Poppins-Semibold">
          Quran App
        </Text>
        <Text h5 weight="Poppins-Regular">
          Learn Quran and
        </Text>
        <Text h6 weight="Poppins-Regular">
          Recite once everyday
        </Text>
      </View>
      <ImageBackground
        style={styles.card}
        source={require("../assets/images/welcome.png")}
        resizeMode="contain"
      >
        <View style={styles.btnBox}>
          <Button
            buttonStyle={styles.button}
            title="Get Started"
            onPress={() => navigation.navigate("AppScreen")}
          />
        </View>
      </ImageBackground>
      {/* <TouchableOpacity style={styles.footerText} onPress={handleOpen}>
        <Text h6 style={{ fontSize: 14 }}>
          by @azamov_dev
        </Text>
      </TouchableOpacity> */}
    </Screen>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
  },
  card: {
    marginVertical: 40,
    width: 220,
    height: 320,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "visible",
  },
  btnBox: {
    position: "absolute",
    bottom: -15,
  },
  button: {
    zIndex: 10,
    borderRadius: 30,
    backgroundColor: colors.orange,
    width: 150,
    padding: 13,
    alignSelf: "center",
  },
  footerText: {
    fontSize: 15,
    position: "absolute",
    bottom: 40,
  },
})
