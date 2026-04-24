import React from "react";
import { View, Text, Image } from "react-native";

function Item(props) {
    let nomePais    = props.nomePais;
    let corFundo    = props.corFundo;
    let corFonte    = props.corFonte;
    let bandeira    = props.bandeira;    
    let habitantes  = props.habitantes;
    let pib         = props.pib;        

    return (
        <View style={{
            backgroundColor: corFundo,
            marginTop: 10,
            height: 100,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
        }}>
        <Image
            source={bandeira}
            style={{ width: 60, height: 40, marginRight: 12, borderRadius: 4 }}
            />

        <View>
            <Text style={{ color: corFonte, fontSize: 22, fontWeight: 'bold' }}>
                {nomePais}
            </Text>

            <Text style={{ color: corFonte, fontSize: 13 }}>
                Habitantes: {habitantes}
            </Text>

            <Text style={{ color: corFonte, fontSize: 13 }}>
                PIB: {pib}
            </Text>
            </View>
        </View>
    );
}

export default Item;