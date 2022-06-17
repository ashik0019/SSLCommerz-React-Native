import axios from 'axios'
import React, { useState } from 'react'
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import SslCommerzScreen from './SslCommerzScreen'


export default PaymentScreen = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false)

  const paymentHandler = async () => {
    setisLoading(true)
    const payload = {
      total_amount: 500,
    }
    try {
      const res = await axios.post('http://sslcommerz.doctorpathao.com/public/api/checkout/ssl/pay', payload)
      console.log('ssl respons', res)
      setisLoading(false)
      if (res.data) {
        navigation.navigate('SslCommerz', {
          data: {url: res.data},
        })
      }
    } catch (error) {
      setisLoading(false)
      console.log('ssl respons error', error)
    }

    //navigation.navigate('SslCommerz')
  }
  const Spinner = () => (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color={'black'} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SSLCOMMERZ PAYMENT</Text>
      <View style={styles.shippingInfoContainer}>
        <Text style={styles.heading}>Shipping Info</Text>
        <Text style={styles.paymentNormalText}>Name: Ashiqur Rahman</Text>
        <Text style={styles.paymentNormalText}>Email: ashiq@gmail.com</Text>
        <Text style={styles.paymentNormalText}>Phone: 01723144515</Text>
        <Text style={styles.paymentNormalText}>Address: Kallyanpur, Mirpur 1, Dhaka</Text>
        <Text style={styles.paymentNormalText}>Name: Ashiqur Rahman</Text>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.heading}>Payment Info</Text>
        <Text style={styles.paymentNormalText}>Total: 500 BDT</Text>

      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => paymentHandler()}
          title={!isLoading ? 'Pay Now' : "loading..."}
          color="#841584"
          accessibilityLabel="Pay Now"
        />
      </View>
    </View>
  )

}

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
    borderColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 200,
  },
  paymentContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'red',
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