import React from 'react'
import { View, TextInput, Image, StyleSheet,  TouchableOpacity } from "react-native";

import { Input, NativeBaseProvider, Slider, Box, Text,Button, VStack, HStack } from 'native-base';
import SignUp from './android/pages/SignUp/SignUp';
import SignIn from './android/pages/SignIn';


export default function App() {
  return (
    
    <NativeBaseProvider>
      <SignUp/>
    </NativeBaseProvider>



  )
}

