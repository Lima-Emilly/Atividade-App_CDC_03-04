import React from 'react';
import { View } from 'react-native';
import { estilos } from './src/styleSheet/estilos';
import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

function App() {

  let imagemNoticia = require('./img/noticia.png');

  return (
    <View style={estilos.fundo}>
      <Cabecalho />
      <Conteudo imagem={imagemNoticia} />
      <Rodape />
    </View>
  );
}

export default App;