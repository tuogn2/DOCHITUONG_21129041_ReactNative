import React, { useContext, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Fixed import path
import { NameContext } from './App'; // Corrected the path

export default function Home({ navigation }) {
  const { name, setname } = useContext(NameContext);
  const [inputValue, setInputValue] = useState(name);

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 5 }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Manage your task</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'black', // Fixed property name
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 10,
          padding: 5,
        }}>
          <AntDesign name="mail" size={24} color="black" />
          <TextInput
            style={{ height: '100%', flex: 1, outlineStyle: 'none' }}
            placeholder="Input your name" // Fixed placeholder text
            onChangeText={(newText) => setInputValue(newText)} 
            value={inputValue} // Changed to value for controlled input
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#B7E0FF',
            height: 50,
            width: 80,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginTop: 100,
          }}
          onPress={() => { // Fixed arrow function syntax
            setname(inputValue);
            navigation.navigate('Todo');
          }}
        >
          <Text>Start</Text> {/* Fixed text inside TouchableOpacity */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
