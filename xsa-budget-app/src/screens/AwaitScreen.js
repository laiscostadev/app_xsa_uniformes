import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const AwaitScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aguarde enquanto o seu orçamento está sendo realizado.</Text>

      <View style={styles.messageContainer}>
        <ActivityIndicator size="large" color="#28a745" />
        <Text style={styles.alertText}>ATENÇÃO! Seu orçamento em breve estará disponível!</Text>
        <Text style={styles.infoText}>Não feche a página, leva menos de cinco minutos!</Text>
      </View>

      <Text style={styles.footer}>Nos siga no instagram! https://www.instagram.com/xsauniformes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#d9534f',
  },
  infoText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#888',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    fontSize: 14,
  },
});

export default AwaitScreen;
