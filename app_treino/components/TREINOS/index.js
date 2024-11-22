import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import styles from './styles';

export default function Treinos({ navigateTo }) {
  return (
    <ImageBackground source={require('../../assets/crossfit.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Treinos do Dia</Text>
       
        <Text style={styles.workout}>Aquecimento: Corrida leve 400 metros.</Text>
        <Text style={styles.workout}>Skill: Técnica de levantamento olímpico.</Text>
        <Text style={styles.workout}>WOD: 21-15-9 de burpees, agachamentos e abdominais.</Text>
        
        <Button title="Voltar" onPress={() => navigateTo('Principal')} />
      </View>
    </ImageBackground>
  );
}
