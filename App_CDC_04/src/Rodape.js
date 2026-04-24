import React from "react";
import { View, Text } from "react-native";
import { estilos } from "./styleSheet/estilos";

function Rodape() {

    let autor = "Guilherme Trombini de Castro";
    let data = "21/04/2026";

    return (
        <View style={estilos.rodape}>
            <Text style={estilos.rodTexto}>{autor}</Text>
            <Text style={estilos.rodTexto}>{data}</Text>
        </View>
    );
}

export default Rodape;