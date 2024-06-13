import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
               navigation.navigate('Home')
        },2100)
    })
  return (
    <SafeAreaView style={styles.safeArea}>
     
      <View style={styles.container}>
        <Animatable.Text style={styles.text} duration={2000} animation="zoomInUp">Spendify</Animatable.Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#3F8782',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight:'800',
    fontSize:45,
  },
});

export default Splash;
