import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import styles from './styles';

export default function IMC({ navigateTo }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateIMC = () => {
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    let bmiMessage = '';
    if (bmiValue < 18.5) {
      bmiMessage = 'Abaixo do peso';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      bmiMessage = 'Peso normal';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      bmiMessage = 'Sobrepeso';
    } else if (bmiValue >= 30 && bmiValue < 35) {
      bmiMessage = 'Obesidade grau 1';
    } else if (bmiValue >= 35 && bmiValue < 40) {
      bmiMessage = 'Obesidade grau 2';
    } else {
      bmiMessage = 'Obesidade grau 3 ou mórbida';
    }
    setMessage(bmiMessage);
  };

  return (
    <ImageBackground source={require('../../assets/crossfit.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Cálculo de IMC</Text>
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <Button title="Calcular IMC" onPress={calculateIMC} />
        {bmi && (
          <>
            <Text style={styles.result}>Seu IMC é: {bmi}</Text>
            <Text style={styles.result}>{message}</Text>
          </>
        )}
        <Button title="Voltar" onPress={() => navigateTo('Principal')} />
      </View>
    </ImageBackground>
  );
}
