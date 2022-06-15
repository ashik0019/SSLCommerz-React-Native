import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/MainStack';
import { SafeAreaView } from 'react-native-safe-area-context';

export default App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
