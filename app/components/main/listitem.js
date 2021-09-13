import { useNavigation } from "@react-navigation/core"
import React from "react"
import { View, StyleSheet, Image } from "react-native"
import { ListItem } from "react-native-elements"
import colors from "../../config/colors"
import { Text } from "../common"

const Icon = ({ number }) => (
  <View style={styles.iconWrapper}>
    <Image
      style={styles.iconImage}
      source={require("../../assets/icons/star.png")}
    />
    <Text h5 weight="Poppins-Semibold" color="black">
      {number}
    </Text>
  </View>
)

const ListItems = ({ data }) => {
  const navigation = useNavigation()

  return (
    <View style={{ width: "100%" }}>
      {data.map((item, i) => (
        <ListItem
          onPress={() => navigation.navigate("DetailsScreen", { id: i })}
          containerStyle={styles.containerStyle}
          style={{
            width: "100%",
            backgroundColor: "yellow",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={i}
          bottomDivider
        >
          <Icon number={item.number} />
          <ListItem.Content style={styles.content}>
            <ListItem.Title style={styles.title}>
              {item.englishName}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.english}>
              {item.numberOfAyahs} · {item.revelationType}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Title
            style={[
              styles.title,
              {
                marginRight: 20,
                color: colors.primary,
                fontFamily: "Poppins-Black",
                fontSize: 20,
              },
            ]}
          >
            {item.name}
          </ListItem.Title>
        </ListItem>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
  },
  iconWrapper: {
    position: "relative",
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    position: "absolute",
    width: 40,
    height: 40,
  },
  title: {
    fontFamily: "Poppins-Semibold",
    color: colors.black,
  },
  subtitle: {
    color: colors.secondary,
    fontFamily: "Poppins-Regular",
  },
  content: {
    width: "100%",
  },
})

export default ListItems
