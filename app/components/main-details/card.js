import React from "react"
import { Image, StyleSheet, View } from "react-native"
import CardImage from "../../assets/images/Card.png"
import colors from "../../config/colors"
import { Text } from "../common"

const Card = ({
  englishName,
  englishNameTranslation,
  revelationType,
  numberOfAyahs,
}) => {
  return (
    <View style={styles.cardBox}>
      <Image style={styles.cardImage} source={CardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.title} h3 weight="Poppins-Semibold" color="white">
          {englishName}
        </Text>
        <Text h6 weight="Poppins-Regular" color="white">
          {englishNameTranslation}
        </Text>
        <View style={styles.line} />
        <Text style={styles.subtitle} h6 weight="Poppins-Regular" color="white">
          {revelationType} · {numberOfAyahs} Ayahs
        </Text>
        <Image
          style={styles.basmalaImg}
          source={require("../../assets/icons/basmala.png")}
        />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    padding: 10,
    paddingHorizontal: 20,
  },
  cardBox: {
    width: "100%",
    height: 300,
    position: "relative",
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cardImage: {
    width: "110%",
    height: "110%",
    position: "absolute",
    resizeMode: "contain",
    top: 10,
  },
  cardDetails: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 20,
  },
  line: {
    width: "70%",
    height: 1,
    backgroundColor: colors.white,
    marginVertical: 20,
  },
  basmalaImg: {
    width: 250,
    height: 50,
    bottom: 0,
    alignSelf: "center",
    resizeMode: "contain",
  },
})
