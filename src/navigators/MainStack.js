import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import PaymentScreen from '../screens/PaymentScreen';
import SslCommerzScreen from '../screens/SslCommerzScreen';
import PaymentStatusScreen from '../screens/PaymentStatusScreen';


const { Navigator, Screen } = createNativeStackNavigator();

const MainStack = ({ props }) => {
  
  return (
    <>
      <Navigator
        screenOptions={props => ({
          headerShown: false,
          animationEnabled: true,
        })}
        initialRouteName={ 'Payment' } >
        <Screen name="Payment" component={PaymentScreen} />
        <Screen name="SslCommerz" component={SslCommerzScreen} />
        <Screen name="PaymentStatus" component={PaymentStatusScreen} />
       
      </Navigator>
    </>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  
});
