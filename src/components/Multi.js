import React from "react"
import { Text } from "react-native"

import Estilo from './style'

export default function () {
    return <Text style={Estilo.fontG}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Estilo.fontG}>Comp #02</Text>
}

export function Comp3() {
    return <Text style={Estilo.fontG}>Comp #03</Text>
}