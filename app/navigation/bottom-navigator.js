import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import BookScreen from "../screens/book-screen"
import MainScreen from "../screens/main-screen"
import ProfileScreen from "../screens/profile-screen"
import { StyleSheet } from "react-native"
import Button from "./elements/button"
import MainIcon from "../assets/icons/main.png"
import BookIcon from "../assets/icons/book.png"
import ProfileIcon from "../assets/icons/profile.png"

const Tab = createBottomTabNavigator()

export default function BottomNavigator() {
  return (
    <Tab.Navigator initialRouteName="Main" tabBarBadgeStyle={styles.container}>
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={({ navigation }) => ({
          title: "Quran",
          tabBarButton: () => (
            <Button
              active={navigation.isFocused()}
              onPress={() => {
                navigation.navigate("Book")
              }}
              icon={BookIcon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <Button
              active={navigation.isFocused()}
              primary
              onPress={() => {
                navigation.navigate("Main")
              }}
              icon={MainIcon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <Button
              active={navigation.isFocused()}
              onPress={() => {
                navigation.navigate("Profile")
              }}
              icon={ProfileIcon}
            />
          ),
        })}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
})
