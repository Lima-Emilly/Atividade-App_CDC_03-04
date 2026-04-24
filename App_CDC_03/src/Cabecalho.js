import React from "react";
import { View, Image, Text } from "react-native";
import { estilos } from "./styleSheet/estilos";

function Cabecalho(props) {
    return (
        <View style={estilos.cabecalho}>
            <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>

            <Image source={props.logoSecundaria} style={estilos.cabimagem} />

            <Text style={estilos.cabTitulo}>FUNDAMENTOS II</Text>
        </View>
    );
}

export default Cabecalho;