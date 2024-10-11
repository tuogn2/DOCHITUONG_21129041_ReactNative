import React, { useContext, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NameContext } from './App'; // Corrected the path
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Add({ navigation }) {
  const { name, setname } = useContext(NameContext);
  const [inputValue, setInputValue] = useState('');
  const handleAddjob =()=>{
     fetch(`https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7`, {
     method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: inputValue, isFinish: false }),
    }).then((res) => {
     setInputValue("")
      return navigation.navigate("Todo")
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 5 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
          <View style={{ width: 100, marginLeft: 10 }}>
            <Text style={{ fontWeight: 500 }}>Hi {name || 'tuong'}</Text>
            <Text>Have a nice day</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 700 }}>Add Your Job</Text>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBlockColor: 'black',
            borderWidth: 1,
            marginHorizontal: 20,
            borderRadius: 10,
            padding: 5,
          }}>
          <TextInput
            style={{ height: '100%', flex: 1, outlineStyle: 'none' }}
            placeholder="input your Job"
            onChangeText={(newText) => setInputValue(newText)}
            defaultValue={inputValue}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{ backgroundColor: '#96CEB4', padding:20,borderRadius:30 }}
             onPress={()=>handleAddjob()}
          >
            <Text style={{ borderBlockColor: '#96CEB4', fontSize: 30 }}>
              Add job
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
