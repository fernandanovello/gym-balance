import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ImageBackground } from 'react-native';
import styles from './styles';

export default function NovoCadastro({ navigateTo }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
    nickname: '',
  });

  const handleSubmit = () => {
    Alert.alert('Cadastro Realizado', 'Seu cadastro foi realizado com sucesso, bom treino!');
    navigateTo('Login');
  };

  return (
    <ImageBackground source={require('../../assets/treino1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Primeiro Nome"
          value={form.firstName}
          onChangeText={(value) => setForm({ ...form, firstName: value })}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Sobrenome"
          value={form.lastName}
          onChangeText={(value) => setForm({ ...form, lastName: value })}
        />
        <TextInput 
          style={styles.input} 
          placeholder="CPF"
          value={form.cpf}
          onChangeText={(value) => setForm({ ...form, cpf: value })}
        />
        <TextInput 
          style={styles.input} 
          placeholder="E-mail: sergio123@gmail.com"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Nasc.: 01/01/01"
          value={form.birthDate}
          onChangeText={(value) => setForm({ ...form, birthDate: value })}
        />
         <TextInput 
          style={styles.input} 
          placeholder="Masc/Fem"
          value={form.gender}
          onChangeText={(value) => setForm({ ...form, gender: value })}
        />
         <TextInput 
          style={styles.input} 
          placeholder="Apelido"
          value={form.nickname}
          onChangeText={(value) => setForm({ ...form, nickname: value })}
        />

        <Button title="Cadastrar" onPress={handleSubmit} />
      </View>
    </ImageBackground>
  );
}
