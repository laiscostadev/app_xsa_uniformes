import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, TouchableOpacity, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { setBudgetData } from '../redux/actions'; // Ação Redux para armazenar os dados do orçamento
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const FormScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState('P');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [deadline, setDeadline] = useState('');
  const [design, setDesign] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [models, setModels] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!quantity || !color || !material || !deadline || !deliveryAddress || !models) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return;
    }

    // Salva os dados no AsyncStorage
    const budgetData = { quantity, size, color, material, deadline, design, deliveryAddress, models, additionalInfo };
    await AsyncStorage.setItem('budgetData', JSON.stringify(budgetData));
    
    // Despacha para o Redux
    dispatch(setBudgetData(budgetData));

    // Navega para a próxima página
    navigation.navigate('Page3');
  };

  const handleDesignUpload = () => {
    // Aqui você pode integrar o envio de imagem, por exemplo, utilizando a biblioteca react-native-image-picker
    Alert.alert('Design', 'Selecione o design para upload');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Preencha as informações a seguir para realizar o seu orçamento.</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex:15"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      
      <Text style={styles.label}>Tamanhos:</Text>
      <Picker
        selectedValue={size}
        style={styles.input}
        onValueChange={setSize}
      >
        <Picker.Item label="P" value="P" />
        <Picker.Item label="M" value="M" />
        <Picker.Item label="G" value="G" />
        <Picker.Item label="XG" value="XG" />
        <Picker.Item label="XXG" value="XXG" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Ex: Azul"
        value={color}
        onChangeText={setColor}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ex: Cetim"
        value={material}
        onChangeText={setMaterial}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ex: 15 dias"
        value={deadline}
        onChangeText={setDeadline}
      />
      
      <TouchableOpacity style={styles.uploadButton} onPress={handleDesignUpload}>
        <Text style={styles.uploadButtonText}>Design</Text>
        <Text style={styles.uploadHint}>Se houver logotipo, bordado ou estampa, envie o design</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Digite aqui o endereço para entrega"
        value={deliveryAddress}
        onChangeText={setDeliveryAddress}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ex: Calça social"
        value={models}
        onChangeText={setModels}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Acrescente observações adicionais"
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Fazer orçamento</Text>
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
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  uploadButton: {
    backgroundColor: '#3b5998',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  uploadHint: {
    color: '#bbb',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    fontSize: 14,
  },
});

export default FormScreen;
