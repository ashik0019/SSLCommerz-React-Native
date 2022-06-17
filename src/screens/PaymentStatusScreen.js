import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import React from 'react'

const PaymentStatusScreen = ({navigation, route}) => {
    const data = route?.params?.data;
    
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PAYMENT STATUS</Text>
      <View style={[styles.shippingInfoContainer,{ borderColor:  data.status == 'success' ? 'green': 'red'}]}>
        <Text style={styles.heading}>{data.status.toUpperCase()}</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => navigation.navigate('Payment')}
          title="Go Back Home"
          color="#841584"
          accessibilityLabel="Pay Now"
        />
      </View>
    </View>
  )
}

export default PaymentStatusScreen

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
      },
      heading: {
        fontSize: 20,
      },
      shippingInfoContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 50,
      },
      buttonView: {
        marginTop: 10,
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