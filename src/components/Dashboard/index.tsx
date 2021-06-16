import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={logout} />
    </View>
  );
};

export default Dashboard;
