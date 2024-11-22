import React, { useState } from 'react';
import { View, Text, Button, TextInput, ImageBackground, Alert } from 'react-native';
import styles from './styles';

export default function Agua({ navigateTo }) {
  const [weight, setWeight] = useState('');
  const [waterGoal, setWaterGoal] = useState(null);
  const [consumedWater, setConsumedWater] = useState(0);

  const calculateWaterIntake = () => {
    const intake = parseFloat(weight) * 35 / 1000;
    setWaterGoal(intake.toFixed(2));
    Alert.alert('Meta de Água', `Você deve beber ${intake.toFixed(2)} litros de água por dia.`);
  };

  const addWater = (amount) => {
    setConsumedWater(consumedWater + amount);
  };

  return (
    <ImageBackground source={require('../../assets/crossfit.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Controle de Água</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu Peso (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <Button title="Calcular" onPress={calculateWaterIntake} />
        {waterGoal && (
          <View>
            <Text style={styles.info}>Meta de ingestão diária: {waterGoal} litros</Text>
            <View style={styles.buttonContainer}>
              <Button title="200ml" onPress={() => addWater(0.2)} />
              <Button title="500ml" onPress={() => addWater(0.5)} />
              <Button title="1 litro" onPress={() => addWater(1)} />
            </View>
            <Text style={styles.info}>Você já ingeriu: {consumedWater} litros</Text>
          </View>
        )}
        <Button title="Voltar" onPress={() => navigateTo('Principal')} />
      </View>
    </ImageBackground>
  );
}
