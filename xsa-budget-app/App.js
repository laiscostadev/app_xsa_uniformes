import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FormScreen from './screens/FormScreen';
import AwaitScreen from './screens/AwaitScreen';
import BudgetScreen from './screens/BudgetScreen';
import AuthScreen from './screens/AuthScreen';
import PaymentPixScreen from './screens/PaymentPixScreen';
import PaymentCreditScreen from './screens/PaymentCreditScreen';
import ProcessingScreen from './screens/ProcessingScreen';
import PaymentSuccessScreen from './screens/PaymentSuccessScreen';
import PaymentFailureScreen from './screens/PaymentFailureScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Await" component={AwaitScreen} />
        <Stack.Screen name="Budget" component={BudgetScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="PaymentPix" component={PaymentPixScreen} />
        <Stack.Screen name="PaymentCredit" component={PaymentCreditScreen} />
        <Stack.Screen name="Processing" component={ProcessingScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
        <Stack.Screen name="PaymentFailure" component={PaymentFailureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}