import React from 'react';
import { SafeAreaView } from 'react-native';

import Primeiro from './src/components/Primeiro'
import X, { Comp2,Comp3 } from './src/components/Multi'

export default () => (
  <SafeAreaView>
    <X/>
    <Comp2/>
    <Comp3/>
    <Primeiro/>
  </SafeAreaView>
)