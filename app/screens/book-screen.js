import React from "react"
import { View } from "react-native"
import { WebView } from "react-native-webview"
import PDFReader from "rn-pdf-reader-js"

const BookScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <PDFReader
        source={{
          uri: "https://downloadthequran.com/wp-content/uploads/2016/04/Holy-Quran-in-Arabic-Language.pdf",
        }}
      />
    </View>
  )
}

export default BookScreen
