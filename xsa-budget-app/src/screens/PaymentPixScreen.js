import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';

const PaymentPixScreen = ({ route }) => {
  // Supondo que o valor total do orçamento foi passado como parâmetro
  const { totalValue } = route.params;

  // Calculando o valor do PIX (50% do valor do orçamento)
  const pixValue = (totalValue * 0.5).toFixed(2);

  // Gerando uma chave aleatória de exemplo
  const generatePixKey = () => {
    // Um exemplo simples de chave aleatória
    return `pixkey${Math.random().toString(36).substring(2, 15)}`;
  };

  const [pixKey] = useState(generatePixKey());

  const copyToClipboard = () => {
    Clipboard.setString(pixKey);
    alert('Chave PIX copiada!');
  };

  return (
    <View style={styles.container}>
      {/* Ícone e legenda */}
      <Text style={styles.header}>Pagamento por PIX</Text>

      <Text style={styles.pixValue}>
        Valor a ser pago: R$ {pixValue}
      </Text>

      <Text style={styles.keyLabel}>Chave PIX gerada:</Text>

      {/* Chave PIX gerada */}
      <View style={styles.pixKeyContainer}>
        <Text style={styles.pixKey}>{pixKey}</Text>
      </View>

      {/* Botão para copiar a chave PIX */}
      <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
        <Text style={styles.copyButtonText}>COPIAR CHAVE</Text>
      </TouchableOpacity>

      <Text style={styles.instruction}>Copie a chave acima e insira no app do seu banco.</Text>

      {/* Rodapé */}
      <Text style={styles.footer}>Nos siga no instagram! https://www.instagram.com/xsauniformes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pixValue: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#28a745',
  },
  keyLabel: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  pixKeyContainer: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  pixKey: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  copyButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginTop: 20,
  },
});

export default PaymentPixScreen;
