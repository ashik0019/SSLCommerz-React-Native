import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const SslCommerzScreen = () => {
  return (
    <View style={styles.container}>
        <WebView source={{ uri: 'https://www.google.com/' }} />
    </View>
  )
}

export default SslCommerzScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  }
})