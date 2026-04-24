import React from "react";
import { ScrollView } from "react-native";
import { estilos } from "./styleSheet/estilos"
import Item from "./Item";

function Conteudo() {
    let itemConteudo = null;

    let ArrayPaises     = ["Brasil", "Angola", "Japão", "Portugal", "China", "Egito", "Alemanha", "Síria", "África do Sul", "Itália"];
    let ArrayCoresFundo = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'brown'];
    let ArrayCoresFonte = ['white', 'black', 'white', 'black', 'white', 'black', 'white', 'black', 'white', 'black'];

    let ArrayBandeiras = [
        require('../img/Brasil.jpg'),   
        require('../img/Angola.jpg'),  
        require('../img/Japao.jpg'),    
        require('../img/Portugal.png'),                            
        require('../img/China.png'),                            
        require('../img/Egito.png'),                            
        require('../img/Alemanha.png'),                            
        require('../img/Siria.png'),                            
        require('../img/Africa.png'),                            
        require('../img/Italia.png'),                            
    ];


    let ArrayHabitantes = [
        "215 milhões", "36 milhões",  "125 milhões", "10 milhões",
        "1,4 bilhão",  "105 milhões", "84 milhões",  "22 milhões",
        "60 milhões",  "59 milhões",
    ];

    let ArrayPIB = [
        "US$ 2,08 tri", "US$ 0,09 tri", "US$ 4,23 tri", "US$ 0,25 tri",
        "US$ 17,7 tri", "US$ 0,47 tri", "US$ 4,07 tri", "US$ 0,02 tri",
        "US$ 0,40 tri", "US$ 2,05 tri",
    ];

    for (let i = 0; i < ArrayPaises.length; i++) {
        itemConteudo = (
            <>
                {itemConteudo}
                <Item
                    nomePais={ArrayPaises[i]}
                    corFundo={ArrayCoresFundo[i]}
                    corFonte={ArrayCoresFonte[i]}
                    bandeira={ArrayBandeiras[i]}
                    habitantes={ArrayHabitantes[i]}
                    pib={ArrayPIB[i]}
                />
            </>
        );
    }

    return (
        <ScrollView style={estilos.corpo}>
            {itemConteudo}
        </ScrollView>
    );
}

export default Conteudo;