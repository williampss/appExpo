import React from 'react';
import { View, Text, Stylesheet } from "react-native";

import * as Animatable from 'react-native-animatable'


export default function Signin() {
  return (

    <View style={styles.conatainer}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}> Bem-Vindo </Text>
          
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}> Email </Text>
          <TextInput
            placeHolder="Digite um email..."
            style={styles.input}
          />
          <Text style={styles.title}> Senha </Text>
          <TextInput
            placeHolder="Digite sua senha"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

         <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        
      </Animatable.View>
    </View>
  
    
  );
}

const styles = StylesSheet.create({
  container:{
    flex:1,
    backgroundColor: '#38a69d' 
  },
  
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  
   massage:{
     fontSize: 28,
     fontWeight: 'bold',
     color: "#FFF"   
  },
  
  containerForm:{
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  
  title:{
    fontSize: 20,
    marginTop: 28
  },
  
  input:{
    borderBottonWidth: 1,
    height: 40,
    marginBottom: 8,
    fontSize: 16
  },

  button:{
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justfyContent: 'center',
    alingItems: 'center'
  },
  
   buttonText:{
    color: '#FFF',
    fontWeigth: 'bold'  
  },
  
   buttonRegister:{
    marginTop: 14,
    alingSelf: 'center'   
  },
  
   registerText:{
    color: '#a1a1a1'   
  },
                                  

                                  
