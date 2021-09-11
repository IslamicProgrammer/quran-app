import React, { useState } from "react"
import { View, StyleSheet, ImageBackground, Image } from "react-native"
import { Button, TabView } from "react-native-elements"
import { Screen, Text } from "../components/common"
import Tabs from "../components/main/tabs"
import useSound from "../hooks/use-sound"

const MainScreen = () => {
  const [index, setIndex] = useState(0)
  const { playSound, stopSound } = useSound(
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3"
  )

  return (
    <Screen style={styles.container}>
      <View style={styles.title}>
        <Text h6>Asslamualaikum</Text>
        <Text weight="Poppins-Semibold" h5 color="black">
          Tanvir Ahassan
        </Text>
      </View>
      <View style={styles.card} resizeMode="cover">
        <Image
          style={styles.image}
          source={require("../assets/images/dashboard.png")}
        />
        <View style={styles.content}>
          <Text
            h6
            style={{ fontSize: 18 }}
            color="white"
            weight="Poppins-Semibold"
          >
            Al-Fatiah
          </Text>
          <Text
            h6
            style={{ fontSize: 16, opacity: 0.8 }}
            color="white"
            weight="Poppins-Regular"
          >
            Al-Fatiah
          </Text>
        </View>
      </View>
      <Tabs index={index} setIndex={setIndex} />
      <TabView style={{ height: 200 }} value={index} onChange={setIndex}>
        <TabView.Item style={{ width: "100%", height: 300 }}>
          <Text h1 color="primary">
            <Button title="start" onPress={playSound} />
            <Button title="stop" onPress={stopSound} />
          </Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%", height: 300 }}>
          <Text h1 color="primary">
            Parah
          </Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%", height: 300 }}>
          <Text h1 color="primary">
            Page
          </Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%", height: 300 }}>
          <Text h1 color="primary">
            Hijib
          </Text>
        </TabView.Item>
      </TabView>
    </Screen>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    padding: 10,
    paddingHorizontal: 20,
  },
  title: {},
  image: {
    width: "100%",
    height: "100%",
  },
  card: {
    marginVertical: 20,
    height: 130,
    width: "100%",
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingHorizontal: 21,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
})
