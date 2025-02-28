import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para o ícone de erro

const PaymentDeclinedScreen = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Houve um problema com seu método de pagamento</Text>

      {/* Ícone de erro e mensagem de falha */}
      <FontAwesome name="times-circle" size={80} color="red" style={styles.icon} />
      <Text style={styles.message}>
        OH, NÃO! Parece que tivemos problemas com o método de pagamento escolhido. Verifique com seu banco, escolha outro método, revise as informações e tente novamente!
      </Text>

      {/* Botão de ação para fechar o app */}
      <TouchableOpacity style={styles.okButton} onPress={() => Alert.alert('Erro', 'Tente novamente mais tarde ou entre em contato com o suporte.')}>
        <Text style={styles.okButtonText}>OK</Text>
      </TouchableOpacity>

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
  icon: {
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  okButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    textAlign: 'center',
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PaymentDeclinedScreen;
