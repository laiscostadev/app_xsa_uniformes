import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const BudgetScreen = ({ navigation }) => {
  // Exemplo de valor calculado com base nas informações inseridas no orçamento (pode ser calculado dinamicamente)
  const [calculatedValue] = useState(500); // Substitua por cálculo real, se necessário

  const handleExit = () => {
    Alert.alert(
      "ATENÇÃO",
      "Se optar por sair, todas as suas informações serão perdidas e o orçamento não será concluído.",
      [
        {
          text: "PROSSEGUIR",
          style: "cancel",
        },
        {
          text: "SAIR",
          onPress: () => {
            // Aqui, você pode limpar os dados e navegar para uma página anterior, por exemplo, a tela inicial
            navigation.navigate('Home'); // Navegue para a página de saída (exemplo)
          },
        },
      ]
    );
  };

  const handleReview = () => {
    // Navegar de volta para o formulário preenchido
    navigation.navigate('FormScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ORÇAMENTO FINALIZADO</Text>

      <Text style={styles.message}>
        O seu orçamento, levando em consideração as informações inseridas, ficou em
        <Text style={styles.value}> R$ {calculatedValue}</Text>!
      </Text>

      <Text style={styles.subMessage}>Para prosseguir para contrato e pagamento:</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NextPage')}>
        <Text style={styles.buttonText}>CLIQUE AQUI!</Text>
      </TouchableOpacity>

      <Text style={styles.reviewMessage}>
        Ou clique aqui para revisar os dados preenchidos no formulário.
      </Text>

      <TouchableOpacity style={styles.link} onPress={handleReview}>
        <Text style={styles.linkText}>clique aqui</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
        <Text style={styles.exitButtonText}>SAIR</Text>
      </TouchableOpacity>

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
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  value: {
    fontWeight: 'bold',
    color: '#28a745',
  },
  subMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  reviewMessage: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
    color: '#888',
  },
  link: {
    marginBottom: 20,
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
    textAlign: 'center',
  },
  exitButton: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 5,
  },
  exitButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    fontSize: 14,
  },
});

export default BudgetScreen;
