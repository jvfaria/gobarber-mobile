import 'react-native-gesture-handler';

import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <View style={{ flex: 1, backgroundColor: '#312E38' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
