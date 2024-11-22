import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './components/LOGIN/index';
import NovoCadastro from './components/NOVOCADASTRO/index';
import Principal from './components/PRINCIPAL/index';
import Agua from './components/AGUA/index';
import IMC from './components/IMC/index';
import Treinos from './components/TREINOS/index';
import Horario from './components/HORARIO/index';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Login' && <Login navigateTo={navigateTo} />}
      {currentScreen === 'NovoCadastro' && <NovoCadastro navigateTo={navigateTo} />}
      {currentScreen === 'Principal' && <Principal navigateTo={navigateTo} />}
      {currentScreen === 'Agua' && <Agua navigateTo={navigateTo} />}
      {currentScreen === 'IMC' && <IMC navigateTo={navigateTo} />}
      {currentScreen === 'Treinos' && <Treinos navigateTo={navigateTo} />}
      {currentScreen === 'Horario' && <Horario navigateTo={navigateTo} />}
    </View>
  );
}
