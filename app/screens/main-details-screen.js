import React, { useEffect, useState } from "react"
import { View, Image, StyleSheet } from "react-native"
import { ActivityIndicator, Screen, Text } from "../components/common"
import { DetailList, Card } from "../components"
import {
  fetchSpesificSurah,
  fetchSurahTranslation,
  getSurah,
  getSurahTrans,
} from "../store/entities/entities"
import { useDispatch, useSelector } from "react-redux"

const MainDetails = ({ route }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const surah = useSelector(getSurah)
  const surahTrans = useSelector(getSurahTrans)

  useEffect(() => {
    fetchData()
  }, [route.params.id])

  useEffect(() => {
    if (surah.number && surahTrans.numberOfAyahs) setLoading(false)
  }, [surah, surahTrans])

  const fetchData = async () => {
    setLoading(true)
    dispatch(fetchSpesificSurah(route.params.id))
    dispatch(fetchSurahTranslation(route.params.id))
  }

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
      {!loading && (
        <>
          <DetailList
            englishName={surah.englishName}
            englishNameTranslation={surah.englishNameTranslation}
            revelationType={surah.revelationType}
            numberOfAyahs={surah.numberOfAyahs}
            data={surah.ayahs}
            transData={surahTrans.ayahs}
          />
        </>
      )}
    </Screen>
  )
}

export default MainDetails

const styles = StyleSheet.create({})
