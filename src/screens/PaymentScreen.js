import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import SslCommerzScreen from './SslCommerzScreen'


export default PaymentScreen = ({navigation}) => {


  const paymentHandler = () => {
    navigation.navigate('SslCommerz')
  }


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
          onPress={() => paymentHandler() }
          title="Pay Now"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
  }
})