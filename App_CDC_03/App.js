import React from 'react';
import { View } from 'react-native';
import { estilos } from './src/styleSheet/estilos';
import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

function App() {
  let logo1 = require('./img/logo1.png');

  let autorNovo = "Emilly Lima";
  let dataNova = "24/04/2026";

  return (
    <View style={estilos.fundo}>
      <Cabecalho logoSecundaria={logo1} />
      <Conteudo />
      <Rodape autor={autorNovo} data={dataNova} />
    </View>
  );
}

export default App;