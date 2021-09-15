import { useNavigation } from "@react-navigation/core"
import React from "react"
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native"
import { ListItem } from "react-native-elements"
import { useDispatch } from "react-redux"
import colors from "../../config/colors"
import { clearSurahList } from "../../store/entities/entities"
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
  const dispatch = useDispatch()

  return (
    <ScrollView scrollEnabled>
      <FlatList
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => {
              dispatch(clearSurahList())
              navigation.navigate("DetailsScreen", { id: item.number })
            }}
            containerStyle={styles.containerStyle}
            style={{
              width: "100%",
              backgroundColor: "yellow",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={item.id}
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
        )}
        keyExtractor={item => item.number.toString()}
        style={{ width: "100%", height: "100%" }}
      />
    </ScrollView>
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
