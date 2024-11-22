import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import styles from './styles';

export default function Login({ navigateTo }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={require('../../assets/crossfit.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Entrar" onPress={() => navigateTo('Principal')} />
        <Button title="Novo Cadastro" onPress={() => navigateTo('NovoCadastro')} />
      </View>
    </ImageBackground>
  );
}
