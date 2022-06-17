import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const SslCommerzScreen = ({ navigation, route }) => {
  const data = route?.params?.data;


  const Spinner = () => (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color={'black'} />
    </View>
  );

  const onMessage = async event => {
    console.log(event.nativeEvent.data);
    if (event.nativeEvent?.data) {
      navigation.navigate('PaymentStatus', { data: { status: event.nativeEvent.data } })
    }
  }

  return (
    <View style={styles.container}>
      <WebView source={{ uri: data.url }}
        style={{ marginTop: 0, fontSize: 30 }}
        //source={anySource}
        //injectedJavaScript={script}
        //scalesPageToFit={false}
        //For the Cache
        domStorageEnabled={true}
        mixedContentMode="compatibility"
        onMessage={onMessage}
        startInLoadingState={true}
        renderLoading={Spinner}
      />
    </View>
  )
}

export default SslCommerzScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
})