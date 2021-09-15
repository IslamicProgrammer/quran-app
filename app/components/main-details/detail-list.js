import React from "react"
import { StyleSheet, View, Image, FlatList } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Tooltip } from "react-native-elements"
import colors from "../../config/colors"
import { Text } from "../common"
import Card from "./card"
import useSound from "../../hooks/use-sound"

const DetailList = ({
  data,
  transData,
  englishName,
  englishNameTranslation,
  numberOfAyahs,
  revelationType,
}) => {
  const { playSound, stopSound } = useSound()

  return (
    <ScrollView>
      <Card
        englishName={englishName}
        englishNameTranslation={englishNameTranslation}
        revelationType={revelationType}
        numberOfAyahs={numberOfAyahs}
      />
      <FlatList
        // pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.header}>
              <Tooltip
                backgroundColor={colors.lightGray}
                popover={
                  <Text
                    style={{ fontSize: 14, color: colors.darkCyan }}
                    color="darkCyan"
                  >
                    {item.sajda ? "Sajda Ayah" : "Not Sajda Ayah"}
                  </Text>
                }
              >
                <View
                  style={[
                    styles.headerNum,
                    {
                      backgroundColor: item.sajda ? colors.red : colors.primary,
                    },
                  ]}
                >
                  <Text color="white" h6>
                    {index + 1}
                  </Text>
                </View>
              </Tooltip>
              <View style={styles.headerButtons}>
                <TouchableOpacity onPress={stopSound}>
                  <Image
                    style={styles.icon}
                    source={require("../../assets/icons/shaerIcon.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => playSound(item.audio)}>
                  <Image
                    style={styles.icon}
                    source={require("../../assets/icons/playIcon.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Save Pressed")}>
                  <Image
                    style={styles.icon}
                    source={require("../../assets/icons/saveIcon.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.content}>
              <Text
                style={styles.contentHeader}
                h4
                color="black"
                weight="Amiri"
              >
                {item.text}
              </Text>
              <Text style={styles.contentTrans} h5 color="darkCyan">
                {transData[index]?.text}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.number.toString()}
        style={{ width: "100%", height: "100%" }}
      />
    </ScrollView>
  )
}

export default DetailList

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  header: {
    width: "100%",
    backgroundColor: "rgba(134, 62, 213, 0.05)",
    borderRadius: 10,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerNum: {
    width: 25,
    height: 25,
    backgroundColor: colors.primary,
    borderRadius: 25 / 2,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
  },
  headerButtons: {
    flexDirection: "row",
  },
  icon: { width: 25, height: 25, marginLeft: 10 },
  content: {
    padding: 10,
  },
  contentHeader: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  contentTrans: {
    marginVertical: 10,
    color: colors.darkCyan,
    fontSize: 18,
  },
})
