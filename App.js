import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// import Primeiro from './src/components/Primeiro'
// import X, { Comp2,Comp3 } from './src/components/Multi'
import MinMax from './src/components/MinMax'

export default () => (
  <SafeAreaView style={style.App}>

    <MinMax min="4" max="20"/>
    {/* Para passar valores do tipo numerico como parametro, basta coloca-lo entre chaves */}
    
    {/* <X/>
    <Comp2/>
    <Comp3/>
    <Primeiro/> */}
  </SafeAreaView>
)

const style = StyleSheet.create({

  App: {
     flex: 1, //o componente pode ocupar toda atela
     justifyContent: "center",
     alignItems: "center",
     padding: 20
  }

})