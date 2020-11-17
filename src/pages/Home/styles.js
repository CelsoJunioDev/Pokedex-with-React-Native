import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ade8f4'
    },
    logo: {
      width: '100%',
      height: '35%',
      alignSelf: 'center'
  },
  input:{
      flexDirection: 'row',
      backgroundColor: '#4EADBE',
      height: 60,
      width: '95%',
      borderRadius: 30,
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 10,
      marginBottom: 30,
  },
  textInput: {
      fontSize: 16,
      color: '#fff',
      flex: 1
  },
    image: {
      alignContent: 'center',
      width: 100, 
      height: 100,
    },
    text: {
      fontSize: 12,
      color: '#000',
      backgroundColor: '#ade8f4',
      padding: 10,
      borderRadius: 500
    },
    card: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '75%',
      borderRadius: 7,
      justifyContent: 'space-around'
    },
    cardLeft: {
      display: 'flex',
      width: '50%',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center'
      
    },
    cardRight: {
      display: 'flex',
      width: '50%',
      borderRadius: 7,
      alignContent: 'center',
      justifyContent: 'center'
      
    },
    textCardRight :{
      color: '#000',
      fontSize: 10,
      textTransform: 'uppercase'
      
    },
    textCardName: {
      color: '#000',
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    textCardLefValue: {
      color: '#000',
      fontSize: 20,
    }
    
  });

  export default styles;