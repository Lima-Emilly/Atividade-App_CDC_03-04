import React from "react";
import { View, Text } from "react-native";
import { estilos } from "./styleSheet/estilos";

function Cabecalho() {
    return (
        <View style={estilos.cabecalho}>
            <Text style={estilos.cabTitulo}>VEJA MAIS NO PORTAL</Text>
            <Text style={estilos.cabSubTitulo}>cadastre-se, comente, saiba mais</Text>
        </View>
    );
}

export default Cabecalho;