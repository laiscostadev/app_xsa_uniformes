import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Linking, Alert } from 'react-native';

const AuthenticationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleProceed = () => {
    if (!isChecked) {
      Alert.alert('Erro', 'Você precisa aceitar o contrato para prosseguir.');
    } else {
      // Navegar para a página de pagamento
      // Você pode modificar esse fluxo para direcionar a tela conforme a seleção de pagamento
      navigation.navigate('PaymentScreen');
    }
  };

  const openContract = () => {
    Linking.openURL('https://www.example.com/contrato.pdf'); // Link para o contrato em PDF
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Insira abaixo as suas informações pessoais para prosseguirmos:</Text>

      <TextInput
        style={styles.input}
        placeholder="Insira seu nome completo"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="exemplo@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Ex: (21) 9 9999-8888"
        value={whatsapp}
        onChangeText={setWhatsapp}
        keyboardType="phone-pad"
      />

      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.checkboxText}>
          Declaro que li e estou de acordo com todas as cláusulas presentes no Contrato de Prestação de Serviços
          <Text style={styles.link} onPress={openContract}> aqui</Text>.
        </Text>
      </View>

      <Text style={styles.paymentHeader}>Selecione o método de pagamento desejado:</Text>

      <View style={styles.paymentMethods}>
        <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('PixPayment')}>
          <Text style={styles.paymentButtonText}>PIX</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('CardPayment')}>
          <Text style={styles.paymentButtonText}>Cartão de Crédito</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedButtonText}>PROSSEGUIR</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  paymentHeader: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  proceedButtonText: {
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

export default AuthenticationScreen;
