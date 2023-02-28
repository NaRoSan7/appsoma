import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>

    <Text style={styles.titulo}> Soma de Valores </Text>
     
     <TextInput style={styles.input0} keyboardType='numeric'/>

      <TextInput style={styles.input1} keyboardType='numeric'/> 
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#083E74',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#FFFFFF"
    
  },

  input0:{

backgroundColor:'#FDFACA',
borderRadius:15,
margin:30,
padding:2,
fontSize:30,

  },

  input1:{
backgroundColor:'#FDFACA',
borderRadius:15,
margin:30,
padding:2,
fontSize:30,


  }

});
