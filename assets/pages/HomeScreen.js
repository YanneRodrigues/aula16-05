import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('')

  const handleAboutClick = () => {
    navigation.navigate('About', {name: name})
    //navigation.navigate('About', {cor: name})
  }

  return (
    <View style={styles.container}>
      <Text>Página Principal</Text>
      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={t=>setName(t)}
      />
      <Button title='Enviar' onPress={handleAboutClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd'
  }
})