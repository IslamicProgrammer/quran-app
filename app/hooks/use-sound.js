import React from "react"
import { Audio } from "expo-av"

export default function useSound(uri) {
  const [sound, setSound] = React.useState()

  async function playSound() {
    const { sound, ...args } = await Audio.Sound.createAsync({
      uri,
    })

    setSound(sound)

    await sound.playAsync()
  }

  async function stopSound() {
    await sound.stopAsync()
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return { playSound, stopSound }
}
