import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, Alert } from 'react-native';
import styles from './styles';

export default function Horario({ navigateTo }) {
  const [vagas, setVagas] = useState(20);

  const handleCheckin = () => {
    if (vagas > 0) {
      setVagas(vagas - 1);
      Alert.alert('Parabéns', 'Seu check-in foi reservado com sucesso!');
    } else {
      Alert.alert('Desculpe', 'Não há vagas disponíveis.');
    }
  };

  return (
    <ImageBackground source={require('../../assets/crossfit.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Horários de Treino</Text>
        <Text style={styles.info}>08h-09h - {vagas} vagas disponíveis</Text>
        <Button title="Reservar Check-in" onPress={handleCheckin} />
        <Button title="Voltar" onPress={() => navigateTo('Principal')} />
      </View>
    </ImageBackground>
  );
}
