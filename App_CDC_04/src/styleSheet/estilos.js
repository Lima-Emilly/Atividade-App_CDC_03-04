import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
 
  fundo: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    marginTop: 25,
  },

  cabecalho: {
    flex: 0.12,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  cabTitulo: {
    color: '#f9f9f9',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'crimson',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 6,
  },

  cabSubTitulo: {
    color: '#aaa',
    fontSize: 13,
  },

  secaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'darkred',
  },

  corpo: {
    flex: 0.78,
    backgroundColor: '#f9f9f9',
  },

  noticiaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  noticiaTexto: {
    flex: 1,
    marginRight: 10,
  },

  noticiaCategoria: {
    color: 'darkred',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  noticiaManchete: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },

  noticiaData: {
    fontSize: 12,
    color: '#888',
  },

  noticiaImagem: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },

  rodape: {
    flex: 0.10,
    backgroundColor: 'darkred',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rodTexto: {
    color: 'yellow',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export { estilos };