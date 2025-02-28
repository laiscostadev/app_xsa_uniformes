import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Quem somos?</Text>
      <Text style={styles.description}>
        Há mais de cinco anos no mercado, fornecemos uniformes personalizados e de qualidade para sua empresa. 
        Com sede em Santa Cruz - RJ, distribuímos para todo o estado. Faça já o seu orçamento!
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
        <Text style={styles.buttonText}>Eu quero</Text>
      </TouchableOpacity>

      <Text style={styles.footerText} onPress={() => Linking.openURL('https://www.instagram.com/xsauniformes')}>
        Nos siga no Instagram! @xsauniformes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
