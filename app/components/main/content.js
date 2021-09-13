import React from "react"
import { TabView, Button } from "react-native-elements"
import { Text } from "../common"
import { useDispatch } from "react-redux"
import { getSurahList } from "../../store/entities/entities"
import { client } from "../../service/client"
import axios from "axios"
import { ListItems } from ".."
import { ScrollView, View } from "react-native"

const Content = ({ index, setIndex, playSound, stopSound }) => {
  const dispatch = useDispatch()

  const fetchData = async () => {
    // const response = await client.get("/surah")
    try {
      const res = await axios.get(
        "https://api.quran.com/api/v4/chapters?language=en"
      )
      console.log("res", res)
    } catch (err) {
      console.log("err", err)
    }

    // fetch("http://api.alquran.cloud/v1/surah")
    //   .then(res => console.log("res", res))
    //   .catch(err => console.log("err", err))
  }

  return (
    <TabView style={{ height: 200 }} value={index} onChange={setIndex}>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <Text h1 color="primary">
          <Button title="start" onPress={playSound} />
          <Button title="stop" onPress={stopSound} />
          <Button title="fetch" onPress={() => fetchData()} />
        </Text>
      </TabView.Item>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <ScrollView persistentScrollbar keyboardShouldPersistTaps="handled">
          <View>
            <ListItems />
          </View>
        </ScrollView>
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
