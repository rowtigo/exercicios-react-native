import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Primeiro from './src/components/Primeiro'
import X, { Comp2,Comp3 } from './src/components/Multi'

export default () => (
  <SafeAreaView style={style.App}>
    <X/>
    <Comp2/>
    <Comp3/>
    <Primeiro/>
  </SafeAreaView>
)

const style = StyleSheet.create({

  App: {
     flex: 1, //o componente pode ocupar toda atela
     justifyContent: "center",
     alignItems: "center"
  }

})