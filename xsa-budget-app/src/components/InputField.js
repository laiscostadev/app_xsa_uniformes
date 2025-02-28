import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

const InputField = ({ label, placeholder, value, onChangeText, keyboardType = 'default', secureTextEntry = false }) => {
  return (
    <React.Fragment>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
});

export default InputField;
