import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import styles from './styles';

export default function Principal({ navigateTo }) {
  return (
    <ImageBackground source={require('../../assets/crossfit.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Treinos" onPress={() => navigateTo('Treinos')} />
          <Button title="Horários" onPress={() => navigateTo('Horario')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="IMC" onPress={() => navigateTo('IMC')} />
          <Button title="Água" onPress={() => navigateTo('Agua')} />
        </View>
        <Button title="Voltar" onPress={() => navigateTo('Login')} />
      </View>
    </ImageBackground>
  );
}

