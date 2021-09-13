import React, { useEffect, useState } from "react"
import { TabView, Button, colors } from "react-native-elements"
import { ActivityIndicator, Text } from "../common"
import { useDispatch, useSelector } from "react-redux"
import { fetchSurahList, getSurahList } from "../../store/entities/entities"
import { client } from "../../service/client"
import axios from "axios"
import { ListItems } from ".."
import { ScrollView, View } from "react-native"

const Content = ({ index, setIndex, playSound, stopSound }) => {
  const dispatch = useDispatch()
  const surahs = useSelector(getSurahList)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch(fetchSurahList())
    setLoading(false)
  }, [loading])

  return (
    <TabView style={{ height: 200 }} value={index} onChange={setIndex}>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <ScrollView
          style={{ padding: 10 }}
          persistentScrollbar
          keyboardShouldPersistTaps="handled"
        >
          {loading ? (
            <Text
              style={{ alignSelf: "center", marginRight: 20 }}
              h3
              weight="Poppins-Regular"
              color="primary"
            >
              Loading...
            </Text>
          ) : (
            <ListItems data={surahs} />
          )}
        </ScrollView>
      </TabView.Item>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <Button title="start" onPress={playSound} />
        <Button title="stop" onPress={stopSound} />
        <Button
          title="fetch"
          onPress={() => dispatch(fetchSurahList(setLoading))}
        />
      </TabView.Item>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <Text h1 color="primary">
          Page
        </Text>
      </TabView.Item>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <Text h1 color="primary">
          Hijib
        </Text>
      </TabView.Item>
    </TabView>
  )
}

export default Content
