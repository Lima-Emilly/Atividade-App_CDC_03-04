import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "./styleSheet/estilos";


function Noticia(props) {
    return (
        <View style={estilos.noticiaContainer}>

            <View style={estilos.noticiaTexto}>
                <Text style={estilos.noticiaCategoria}>{props.categoria}</Text>
                <Text style={estilos.noticiaManchete}>{props.manchete}</Text>
                <Text style={estilos.noticiaData}>{props.data}</Text>
            </View>

            <Image source={props.imagem} style={estilos.noticiaImagem} />

        </View>
    );
}

export default Noticia;