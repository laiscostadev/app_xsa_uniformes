import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Alert } from 'react-native';

const PaymentCardScreen = ({ route }) => {
  // Supondo que o valor total do orçamento foi passado como parâmetro
  const { totalValue } = route.params;

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [installments, setInstallments] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !cardHolder || !expiryDate || !cvv || !installments) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Aqui você pode integrar o processo de pagamento via API ou backend
    Alert.alert('Pagamento', 'Pagamento realizado com sucesso!');
  };

  // Gerar opções de parcelamento com base no valor total
  const generateInstallmentOptions = () => {
    const options = [];
    const maxInstallments = 12; // Número máximo de parcelas
    for (let i = 1; i <= maxInstallments; i++) {
      const installmentValue = (totalValue / i).toFixed(2);
      options.push(`${i}x de R$ ${installmentValue}`);
    }
    return options;
  };

  return (
    <View style={styles.container}>
      {/* Ícone e legenda */}
      <Text style={styles.header}>Pagamento por Cartão de Crédito</Text>

      <TextInput
        style={styles.input}
        placeholder="0123 4567 8910 1112"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="number-pad"
        maxLength={19} // Máximo de caracteres para o número do cartão
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do titular como está no cartão"
        value={cardHolder}
        onChangeText={setCardHolder}
      />

      <TextInput
        style={styles.input}
        placeholder="MM/AAAA"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="number-pad"
        maxLength={3}
      />

      <Text style={styles.label}>Parcelamento</Text>
      <Picker
        selectedValue={installments}
        style={styles.picker}
        onValueChange={(itemValue) => setInstallments(itemValue)}
      >
        <Picker.Item label="Selecione o parcelamento" value="" />
        {generateInstallmentOptions().map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Finalizar Pagamento</Text>
      </TouchableOpacity>

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
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  picker: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  paymentButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginTop: 20,
  },
});

export default PaymentCardScreen;
