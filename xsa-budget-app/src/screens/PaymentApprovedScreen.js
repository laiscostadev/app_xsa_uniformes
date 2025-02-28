import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para o ícone de "ok"

const PaymentApprovedScreen = ({ route }) => {
  const { userEmail } = route.params;

  // Função para censurar o e-mail (exibindo apenas o começo e o final)
  const censorEmail = (email) => {
    const parts = email.split('@');
    const name = parts[0];
    const domain = parts[1];
    const censoredName = name.substring(0, 2) + '****' + name.substring(name.length - 2);
    return `${censoredName}@${domain}`;
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Seu pagamento foi concluído com sucesso</Text>

      {/* Ícone de "ok" e mensagem de sucesso */}
      <FontAwesome name="check-circle" size={80} color="green" style={styles.icon} />
      <Text style={styles.message}>
        PARABÉNS! Seu pagamento foi concluído com sucesso! Em breve você receberá o comprovante, detalhes do pedido e uma cópia do contrato no e-mail informado:{" "}
        <Text style={styles.email}>{censorEmail(userEmail)}</Text>.
      </Text>

      {/* Botão de ação para fechar o app */}
      <TouchableOpacity style={styles.okButton} onPress={() => Alert.alert('Obrigado', 'Obrigado por usar nosso serviço!')}>
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
  email: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  okButton: {
    backgroundColor: '#28a745',
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

export default PaymentApprovedScreen;
