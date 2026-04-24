import React from "react";
import { ScrollView, Text } from "react-native";
import { estilos } from "./styleSheet/estilos";
import Noticia from "./Noticia";

function Conteudo(props) {

    let ArrayManchetes = [
        "Brasil registra maior crescimento econômico dos últimos 10 anos",
        "Seleção brasileira vence Argentina e vai à final da Copa América",
        "Novo iPhone 17 é lançado com bateria de 5 dias de duração",
        "Curitiba é eleita a cidade mais sustentável do Brasil em 2025",
        "NASA confirma descoberta de água líquida em lua de Júpiter",
        "Governo anuncia novo programa de habitação para famílias de baixa renda",
        "Inteligência Artificial aprende a diagnosticar câncer com 98% de precisão",
    ];

    let ArrayDatas = [
        "24/04/2026",
        "20/04/2026",
        "18/04/2026",
        "11/04/2026",
        "22/04/2026",
        "19/04/2026",
        "10/04/2026",
    ];

    let ArrayCategorias = [
        "ECONOMIA",
        "ESPORTES",
        "TECNOLOGIA",
        "CIDADES",
        "CIÊNCIA",
        "POLÍTICA",
        "SAÚDE",
    ];

    let listaDeNoticias = null;
    for (let i = 0; i < ArrayManchetes.length; i++) {
        listaDeNoticias = (
            <>
                {listaDeNoticias}

                <Noticia
                    manchete={ArrayManchetes[i]}
                    data={ArrayDatas[i]}
                    categoria={ArrayCategorias[i]}
                    imagem={props.imagem}
                />
            </>
        );
    }

    return (
        <ScrollView style={estilos.corpo}>
            <Text style={estilos.secaoTitulo}>LEIA MAIS</Text>
            {listaDeNoticias}
        </ScrollView>
    );
}

export default Conteudo;