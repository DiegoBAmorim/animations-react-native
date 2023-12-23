import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Container } from './styles';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20 }}>
        Animações Prontas
      </Text>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}
        onPress={() => navigate('TabAnimated' as never)}
      >
        <Text>👉🏼</Text>
        <Text
          style={{
            fontSize: 20,
            textDecorationLine: 'underline',
            color: '#0000FF',
          }}
        >
          Tabs animadas
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
