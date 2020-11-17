import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, Button, TextInput, TouchableOpacity } from 'react-native'

import pokelogo from '../../assets/pokelogo.png'
import styles from './styles'


export default function Home() {

  const [isColeted, setIsColeted] = useState(false)
  const [dadosPoke, setDadosPoke] = useState([])
  const [habilities, setHabilities] = useState([])
  const [type, setType] = useState([])
  const [pokemon, setPokemon] = useState('')
  const [image, setImage] = useState('')

  async function BuscarPoke() {
    
   await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,{ //busca
      method: 'GET',
      headers: {
        'accept' : 'application/json'
      }
    })
    .then(Response => Response.json())
    .then(data =>{
    console.log(data.abilities[0].ability.name)
      setDadosPoke(data.forms[0].name)
      setHabilities(data.abilities[0].ability.name)
      setType(data.types[0].type.name)
      setImage(data.forms[0].url)
      setPokemon('')
      setIsColeted(true)
      
    }) 
  }

  return (
    <SafeAreaView style={styles.container}>
        <Image source={pokelogo} style={styles.logo} resizeMode='contain'/>
        
        <View style={styles.input}>
            <TextInput 
            placeholderTextColor='#fff'
            style={styles.textInput}
            placeholder='Digite o nome do pokemon'
            value={pokemon}
            onChangeText={pokemon => setPokemon(pokemon)}
            /> 
            <TouchableOpacity onPress={BuscarPoke}>
              <Text style={styles.text}>Buscar</Text>
            </TouchableOpacity>
            
        </View>   
    
    
    {
        isColeted &&

  <View style={styles.card}>
  <View style={styles.cardLeft}>
  
    <Image
    style={styles.image} 
    source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${image
    .replace('https://pokeapi.co/api/v2/pokemon-form/', '')
    .replace('/', '')}.png`}}/>
  </View>

  <View style={styles.cardRight}>
  <Text style={styles.textCardName}>{dadosPoke}</Text> 
      <Text style={styles.textCardRight}>Habilidade:</Text> 
      <Text style={styles.textCardLefValue}>{habilities}</Text> 
      <Text style={styles.textCardRight}>Tipo:</Text> 
      <Text style={styles.textCardLefValue}>{type}</Text> 
  </View>
    
    </View>
    }
    
    </SafeAreaView>
  )
}



