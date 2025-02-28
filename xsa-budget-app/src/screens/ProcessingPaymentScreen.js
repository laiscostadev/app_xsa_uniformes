import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const ProcessingPaymentScreen = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Aguarde enquanto o seu pagamento está sendo processado!</Text>

      {/* Ícone de "aguardando" e mensagem */}
      <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      <Text style={styles.message}>
        ATENÇÃO! Pedido de pagamento efetuado! Não feche este aplicativo enquanto a solicitação está em andamento.
      </Text>

      {/* Rodapé */}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loader: {
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ProcessingPaymentScreen;
