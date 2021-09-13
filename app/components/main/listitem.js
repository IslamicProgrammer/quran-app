import { useNavigation } from "@react-navigation/core"
import React from "react"
import { View, StyleSheet, Image } from "react-native"
import { ListItem } from "react-native-elements"
import colors from "../../config/colors"
import { Text } from "../common"

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
]

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

const ListItems = () => {
  const navigation = useNavigation()
  return (
    <View style={{ width: "100%" }}>
      {list.map((l, i) => (
        <ListItem
          onPress={() => navigation.navigate("Details", { id: i })}
          containerStyle={styles.containerStyle}
          style={{
            width: "100%",
            backgroundColor: "yellow",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={i}
          s
          bottomDivider
        >
          <Icon number={i + 1} />
          <ListItem.Content style={styles.content}>
            <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {l.subtitle + " · " + "Meccan"}
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
            ةحتافلا
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
