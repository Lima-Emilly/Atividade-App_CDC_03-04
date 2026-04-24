import React from "react";
import { View, Text } from "react-native";
import { estilos } from "./styleSheet/estilos"

function Rodape(props) {
    return (
        <View style={estilos.rodape}>
            <Text style={estilos.rodAutor}>{props.autor}</Text>
            <Text style={estilos.rodAutor}>{props.data}</Text>
        </View>
    );
}

export default Rodape;