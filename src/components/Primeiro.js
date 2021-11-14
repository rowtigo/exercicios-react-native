import React from 'react';
import { Text } from 'react-native';

import Estilo from './style'

export default () => {

    console.warn("opa!") //gera um toats visual 
    return <Text style={Estilo.fontG}>Meu primeiro componente!</Text>
}