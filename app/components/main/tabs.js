import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Tab } from "react-native-elements"
import colors from "../../config/colors"

const Tabs = ({ index, setIndex }) => {
  const titles = ["Surah", "Parah", "Page", "Hijb"]

  return (
    <Tab
      indicatorStyle={{
        backgroundColor: colors.primary,
      }}
      accessibilityLabel={{ color: "red" }}
      style={{ backgroundColor: "red" }}
      value={index}
      onChange={setIndex}
      variant="default"
    >
      {titles.map((title, idx) => (
        <Tab.Item
          titleStyle={{
            color: index === idx ? colors.primary : colors.secondary,
            textTransform: "capitalize",
            fontSize: idx === index ? 16 : 15,
            fontFamily: "Poppins-Semibold",
          }}
          buttonStyle={{ backgroundColor: colors.white }}
          title={title}
        />
      ))}
    </Tab>
  )
}

export default Tabs

const styles = StyleSheet.create({})
