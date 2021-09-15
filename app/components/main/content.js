import React from "react"
import { TabView, Button } from "react-native-elements"
import { Text } from "../common"
import { ListItems } from ".."
import { View } from "react-native"

const Content = ({ index, setIndex, surahData: surahs }) => {
  return (
    <TabView style={{ height: 200 }} value={index} onChange={setIndex}>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <View style={{ padding: 10 }}>
          <ListItems data={surahs} />
        </View>
      </TabView.Item>
      <TabView.Item style={{ width: "100%", height: "100%" }}>
        <View>
          <Text h1 color="primary">
            Page
          </Text>
        </View>
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
