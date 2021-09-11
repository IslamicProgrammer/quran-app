import React from "react"
import { StyleSheet } from "react-native"
import { Tab } from "react-native-elements"
import colors from "../../config/colors"

const titles = ["Surah", "Parah", "Page", "Hijb"]

const Tabs = ({ index, setIndex }) => {
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
          key={title}
          titleStyle={[
            styles.titleStyle,
            {
              color: index === idx ? colors.primary : colors.secondary,
              fontSize: idx === index ? 16 : 15,
            },
          ]}
          buttonStyle={styles.buttonStyle}
          title={title}
        />
      ))}
    </Tab>
  )
}

export default Tabs

const styles = StyleSheet.create({
  buttonStyle: { backgroundColor: colors.white },
  titleStyle: { textTransform: "capitalize", fontFamily: "Poppins-Semibold" },
})
