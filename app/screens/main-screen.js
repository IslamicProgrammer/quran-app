import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Content } from "../components"
import { ActivityIndicator, Screen, Text } from "../components/common"
import Tabs from "../components/main/tabs"
import { fetchSurahList, getSurahList } from "../store/entities/entities"

const MainScreen = () => {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const surahs = useSelector(getSurahList)

  useEffect(() => {
    if (surahs.length) setLoading(false)
  }, [surahs])

  useEffect(() => {
    setLoading(true)
    dispatch(fetchSurahList())
  }, [])

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
      {!loading && (
        <>
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
          <Content index={index} setIndex={setIndex} surahData={surahs} />
        </>
      )}
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
